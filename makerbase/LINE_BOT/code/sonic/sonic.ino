int TrigPin=5;
int EchoPin=4;
void setup(){
Serial.begin(9600); 
pinMode(TrigPin, OUTPUT); // 設定 TrigPiTrigPi n輸出
pinMode(EchoPin, INPUT);
}

void loop() {
long duration, distance;
digitalWrite(TrigPin, LOW); 
delayMicroseconds(2);
digitalWrite(TrigPin, HIGH); 
delayMicroseconds(10);
digitalWrite(TrigPin, LOW) ;
duration = pulseIn(EchoPin, HIGH);
distance = (duration/2) / 29.1;
Serial.print("distance=");
Serial.println(distance);
delay(1000);
}
