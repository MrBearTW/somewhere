/*
  LinkIt 7697 AQI Lamp

  This sketch connects to a website (http://download.labs.mediatek.com)
  using LinkIt 7697

  Following is what we do in this sketch:
  1. connect to a Wi-Fi AP to get internet access
  2. use public IP to determine the location of ourself (http://ip-api.com/json/)
  3. get the AQI information from open data (http://opendata2.epa.gov.tw/AQI.json)
  4. every 5 min update AQI data

  Material:
    LinkIt 7697
    WS2812B Strip/Module
    3DP Lamp
    Smart Phone /w Linkit Remote APP

  created 13 April 2018
  by Felix Lin
*/

#include <LWiFi.h>
#include <LTimer.h>
#include <LRemote.h>
#include <ArduinoJson.h>
#include <Adafruit_NeoPixel.h>

#define LED_PIN       5
#define LED_NUM       4
#define BLE_NAME      "20180527KHAQI-Lamp-"
#define DEFAULT_SITE  11
#define UPDATE_TIME   300000 /* update every 5 min. unit: mS */

char ssid[] = "MAKERINN-1";      //  your network SSID (name)
char pass[] = "makerinn";  // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;               // your network key Index number (needed only for WEP)

LTimer timer0(LTIMER_0);
Adafruit_NeoPixel strip = Adafruit_NeoPixel(LED_NUM, LED_PIN, NEO_GRB + NEO_KHZ800);

LRemoteLabel  aqi_text;
LRemoteLabel  aqi_val;
LRemoteSlider led_r;
LRemoteSlider led_g;
LRemoteSlider led_b;
LRemoteSwitch manual;

typedef struct {
  char*     site;
  int       index;
} country_map_t;

country_map_t site_mapping[] = {
  {"Keelung", 0},
  {"Taipei", 11},
  {"Taoyuan", 16},
  {"Hsinchu", 23},
  {"Miaoli", 25},
  {"Taichung", 30},
  {"Changhua", 32},
  {"Yunlin",  75},
  {"Chiayi", 41},
  {"Tainan", 45},
  {"Kaohsiung", 53},
  {"Pingtung", 57},
  {"Taitung", 60},
  {"Hualien", 61},
  {"Yilan", 63},
  {"Nantou", 67},
  {"Lienchiang", 71},
  {"Kinmen", 72},
  {"Penghu", 73},
  {NULL, -1},
};


// Initialize the Ethernet client library
// with the IP address and port of the server
// that you want to connect to (port 80 is default for HTTP):
WiFiClient          client;
int                 status = WL_IDLE_STATUS;
#define HTTP_PORT   80

/* variables */
char  endOfHeaders[] = "\r\n\r\n";
int   cnt;
int   site, aqi, mode;
int   update_ip, update_aqi, update_led;
int   r_value, g_value, b_value, aqir_value, aqig_value, aqib_value;

void set_lremote() {
  // Setup the Remote Control's UI canvas
  LRemote.setName(BLE_NAME);
  LRemote.setOrientation(RC_PORTRAIT);
  LRemote.setGrid(3, 4);

  // Add a slider for RED
  led_r.setText("LED RED");
  led_r.setPos(0, 1);
  led_r.setSize(3, 1);
  led_r.setColor(RC_ORANGE);
  led_r.setValueRange(0, 255, 128);
  LRemote.addControl(led_r);
  
  // Add a slider for GREEN
  led_g.setText("LED GREEN");
  led_g.setPos(0, 2);
  led_g.setSize(3, 1);
  led_g.setColor(RC_ORANGE);
  led_g.setValueRange(0, 255, 128);
  LRemote.addControl(led_g);
  
  // Add a slider for BLUE
  led_b.setText("LED BLUE");
  led_b.setPos(0, 3);
  led_b.setSize(3, 1);
  led_b.setColor(RC_ORANGE);
  led_b.setValueRange(0, 255, 128);
  LRemote.addControl(led_b);

  // Add a simple text to display AQI lable
  aqi_text.setText("AQI:");
  aqi_text.setPos(0, 0);
  aqi_text.setSize(1, 1);
  aqi_text.setColor(RC_GREY);
  LRemote.addControl(aqi_text);

  // Add a simple text to display AQI value
  aqi_val.setText("");
  aqi_val.setPos(1, 0);
  aqi_val.setSize(1, 1);
  aqi_val.setColor(RC_GREY);
  LRemote.addControl(aqi_val);
  
  // Add an on/off switch
  manual.setText("Manual");
  manual.setPos(2, 0);
  manual.setSize(1, 1);
  manual.setColor(RC_BLUE);
  LRemote.addControl(manual);

  LRemote.begin();
  Serial.println("Lremote.begin() returned");
  
}

void setup() {
  
  //Initialize serial and wait for port to open:
  Serial.begin(9600);

  // initialize LRmote
  set_lremote();
  
  // initialization Timer
  timer0.begin();
  timer0.start(UPDATE_TIME, LTIMER_REPEAT_MODE, _callback0, NULL);
  
  // neopixel
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
  
  r_value = 128;
  g_value = 128;
  b_value = 128;
  
}


void loop() {

  // attempt to connect to Wifi network:
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
    status = WiFi.begin(ssid, pass);
    update_ip = 1;
  }
//  Serial.println("Connected to wifi");
//  printWifiStatus();

  if (update_ip) {
    site = getIpInfo();
    if (site > 0) {
      update_ip = 0;
      update_aqi = 1;
    }
  }
  
  if (update_aqi) {
    aqi = getAQIInfo(site);
    if (aqi <= 0) {
      /* can't get AQI data, wait for a second */
      delay(1000);
    } else {
      Serial.print("current AQI: ");
      Serial.println(aqi);
      update_aqi = 0;
      update_led = 1;
      aqi_val.updateText(String(aqi, 10));
      if (aqi <= 50) {
        /* good */
        aqir_value = 0;
        aqig_value = 255;
        aqib_value = 0;
  
      } else if (aqi <= 100) {
        /* Moderate */
        aqir_value = 255;
        aqig_value = 255;
        aqib_value = 0;
        
      } else if (aqi <= 150) {
        /* Unhealthy for Sensitive Groups */
        aqir_value = 255;
        aqig_value = 120;
        aqib_value = 0;
        
      } else if (aqi <= 200) {
        /* Unhealthy */
        aqir_value = 255;
        aqig_value = 0;
        aqib_value = 0;
        
      } else if (aqi <= 300) {
        /* Vert Unhealthy */
        aqir_value = 80;
        aqig_value = 0;
        aqib_value = 170;
        
      } else {
        /* Hazardous */
        aqir_value = 255;
        aqig_value = 20;
        aqib_value = 50;
        
      }
    }
  }
  


#if 0
char json_buffer[bufferSize];
  while (client.available()) {
    json_buffer[cnt] = client.read();
    char c = json_buffer[cnt++];
    Serial.write(c);
  }
#endif

  if (update_led) {
    update_led = 0;
    if (mode) {
      /* manual mode */
      for (int i = 0; i < LED_NUM; i++) {
        // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
        strip.setPixelColor(i, strip.Color(r_value, g_value, b_value));
        strip.show(); // This sends the updated pixel color to the hardware.
      }
    } else {
      /* AQI mode */
      for (int i = 0; i < LED_NUM; i++) {
        // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255
        strip.setPixelColor(i, strip.Color(aqir_value, aqig_value, aqib_value));
        strip.show(); // This sends the updated pixel color to the hardware.
      }
    }
    
  }
  
  lremote_subloop();

}

void lremote_subloop() {
  
  // check if we are connect by some 
  // BLE central device, e.g. an mobile app
  if(!LRemote.connected()) {
    delay(500);
  } else {
    // The interval between button down/up
    // can be very short - e.g. a quick tap
    // on the screen.
    // We could lose some event if we
    // delay something like 100ms.
    delay(15);
  }
  
  // Process the incoming BLE write request
  // and translate them to control events
  LRemote.process();

  // Now we poll each control's status

  if(manual.isValueChanged()){
    digitalWrite(LED_BUILTIN, manual.getValue());
    mode = manual.getValue();
    update_led = 1;
    Serial.print("mode new value =");
    Serial.println(mode);
    
  }

  if(led_r.isValueChanged()){
    r_value = led_r.getValue();
    update_led = 1;
    Serial.print("slider LED_R to new value = ");
    Serial.println(r_value);
  }
  
  if(led_g.isValueChanged()){
    g_value = led_g.getValue();
    update_led = 1;
    Serial.print("slider LED_G to new value = ");
    Serial.println(g_value);
  }
  
  if(led_b.isValueChanged()){
    b_value = led_b.getValue();
    update_led = 1;
    Serial.print("slider LED_B to new value = ");
    Serial.println(b_value);
  }

}


/**
   get the public IP address of itself.
   find the location and return site index
*/
int getIpInfo() {
  const size_t bufferSize = JSON_ARRAY_SIZE(77) + 77 * JSON_OBJECT_SIZE(22);
  DynamicJsonBuffer   jsonBuffer(bufferSize);

  Serial.println("\n Starting connection to ip-api server...");
  // if you get a connection, report back via serial:
  if (client.connect("ip-api.com", HTTP_PORT)) {
    Serial.println("connected to server (GET)");
    // Make a HTTP request:
    Serial.println("connected");
    client.println("GET /json/ HTTP/1.0");
    client.println("Host: ip-api.com");
    client.println();
    delay(10);
  }

  if (!client.find(endOfHeaders)) {
    Serial.println("Invalid response");
    return -1;
  }

  JsonObject& root = jsonBuffer.parseObject(client);
  if (!root.success()) {
    Serial.println("Parsing failed!");
    return -1;
  }

  const char* query = root["query"];
  const char* regionName = root["regionName"];
  Serial.println(query);
  Serial.println(regionName);

  // if the server's disconnected, stop the client:
  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();
  }

  country_map_t *temp_map;
  for (int i = 0; site_mapping[i].site != NULL && i >= 0; i++) {
    if (strcmp(site_mapping[i].site, regionName) == 0) {
      Serial.print("found!");
      Serial.println(site_mapping[i].index);
      return site_mapping[i].index;
    }
  }
  /* not found */
  return DEFAULT_SITE;
}

int getAQIInfo(int index) {
  const size_t bufferSize = JSON_ARRAY_SIZE(77) + 77 * JSON_OBJECT_SIZE(22);
  DynamicJsonBuffer   jsonBuffer(bufferSize);
  if ((index < 0) || (index > 76)) {
    index = DEFAULT_SITE;
  }
  Serial.println("\n Starting connection to opendata2.epa.gov.tw server...");
  // if you get a connection, report back via serial:
  if (client.connect("opendata2.epa.gov.tw", HTTP_PORT)) {
    Serial.println("connected to server (GET)");
    // Make a HTTP request:
    Serial.println("connected");
    client.println("GET /AQI.json HTTP/1.0");
    client.println("Host: opendata2.epa.gov.tw");
    client.println();
    delay(50);
  }

  if (!client.find(endOfHeaders)) {
    Serial.println("Invalid response");
    return -1;
  }

  JsonArray& root = jsonBuffer.parseArray(client);
  JsonArray& root_ = root;
  JsonObject& root_0 = root_[index];

  const char* root_0_SiteName = root_0["SiteName"]; // "基隆"
  const char* root_0_County = root_0["County"]; // "基隆市"
  const char* root_0_AQI = root_0["AQI"]; // "77"
  const char* root_0_Pollutant = root_0["Pollutant"]; // "細懸浮微粒"
  const char* root_0_Status = root_0["Status"]; // "普通"
  const char* root_0_SO2 = root_0["SO2"]; // "2.5"
  const char* root_0_CO = root_0["CO"]; // "0.34"
  const char* root_0_CO_8hr = root_0["CO_8hr"]; // "0.5"
  const char* root_0_O3 = root_0["O3"]; // "63"
  const char* root_0_O3_8hr = root_0["O3_8hr"]; // "37"
  const char* root_0_PM10 = root_0["PM10"]; // "27"
  const char* root_0_PM2_5 = root_0["PM2.5"]; // "22"
  const char* root_0_NO2 = root_0["NO2"]; // "6.5"
  const char* root_0_NOx = root_0["NOx"]; // "7"
  const char* root_0_NO = root_0["NO"]; // "0.5"
  const char* root_0_WindSpeed = root_0["WindSpeed"]; // "0.9"
  const char* root_0_WindDirec = root_0["WindDirec"]; // "352"
  const char* root_0_PublishTime = root_0["PublishTime"]; // "2018-04-22 14:00"
  const char* root_0_PM2_5_AVG = root_0["PM2.5_AVG"]; // "26"
  const char* root_0_PM10_AVG = root_0["PM10_AVG"]; // "37"
  const char* root_0_Latitude = root_0["Latitude"]; // "25.129167"
  const char* root_0_Longitude = root_0["Longitude"]; // "121.760056"

  Serial.println(root_0_County);
  Serial.println(root_0_AQI);
  String str = String(root_0_AQI);
  Serial.println(root_0_Status);
  Serial.println(root_0_PublishTime);

  // if the server's disconnected, stop the client:
  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting from server.");
    client.stop();
  }
  return str.toInt();
}

// callback function for timer0 to trigger update AQI
void _callback0(void *usr_data) {
  update_aqi = 1;

}

