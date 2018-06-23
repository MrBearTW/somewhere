int buzzer=8;
void setup() {
pinMode (buzzer, OUTPUT);
}

void loop() {
tone(buzzer, 1000, 100);
delay(200);
tone(buzzer, 1000, 100);
delay(200);
tone(buzzer, 1000, 100);
delay(200);
noTone (buzzer );
delay(1000);
}
