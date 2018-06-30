#include<LWiFi.h>
#include <PubSubClient.h>

char ssid[] = "classroom";      //  your network SSID (name)
char pass[] = "WDA89956399";  // your network password (use for WPA, or use as key for WEP)
int keyIndex = 0;               // your network key Index number (needed only for WEP)
int status = WL_IDLE_STATUS;
WiFiClient client;
char message[256];
PubSubClient upload(client);
void callback(char* topic, byte* payload, unsigned int length) {
  
 if (strcmp(topic,"home/123") == 0) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i=0;i<length;i++) {
    Serial.print((char)payload[i]);
    message[i]=payload[i];
  }
  Serial.println();
  if(atoi(message)==1){
     digitalWrite(7, HIGH);
  }
  else if(atoi(message)==0){
     digitalWrite(7, LOW);
     }
  }
}
void reconnect() {
  // Loop until we're reconnected
  while (!upload.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (upload.connect("client")) {
      Serial.println("connected");
      upload.subscribe("home/#");
    } else {
      Serial.print("failed, rc=");
      Serial.print(upload.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}
void setup() {
   //Initialize serial and wait for port to open:
    Serial.begin(9600);
    pinMode(7, OUTPUT);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for native USB port only
    }
  while (status != WL_CONNECTED) {
        Serial.print("Attempting to connect to SSID: ");
        Serial.println(ssid);
        // Connect to WPA/WPA2 network. Change this line if using open or WEP network:
        status = WiFi.begin(ssid, pass);
    }
    Serial.println("Connected to wifi");
    printWifiStatus();

    upload.setServer("iot.eclipse.org", 1883);
    upload.setCallback(callback);
 }
void loop() {
if (!upload.connected()) {
    reconnect();
   }
    upload.loop();
  }
void printWifiStatus() {
    // print the SSID of the network you're attached to:
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());

    // print your WiFi shield's IP address:
    IPAddress ip = WiFi.localIP();
    Serial.print("IP Address: ");
    Serial.println(ip);

    // print the received signal strength:
    long rssi = WiFi.RSSI();
    Serial.print("signal strength (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
}

