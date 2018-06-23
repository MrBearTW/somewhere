#include <dht.h>
#define dht_dpin 10
dht DHT; 
int buzzer=8;
void setup() {
pinMode (buzzer, OUTPUT);
Serial.begin(9600);
}

void loop() {


DHT.read11(dht_dpin);
Serial.print ("Humidity = ");
Serial.print (DHT.humidity); // 獲得 濕度資料
Serial.print ("%");
Serial.print ("temperature = ");
Serial.print (DHT.temperature); // 獲得 溫度資料
Serial.println("C ");
delay(1000);

if(DHT.humidity>60){
tone(buzzer, 1000, 100);
delay(200);
tone(buzzer, 1000, 100);
delay(200);
noTone (buzzer );
delay(1000);
}
}


