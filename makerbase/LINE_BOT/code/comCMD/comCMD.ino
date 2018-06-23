#include <dht.h>

char a;
void setup() {
Serial.begin(9600);
}

void loop() {
if(Serial.available()>0)
{a=Serial.read();
if(a=='1'){Serial.println("hello!~");}
if(a=='2'){Serial.println("YOYOYO");}
}
}
