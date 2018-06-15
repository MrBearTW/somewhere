const int firstLedPin = 4;
const int lastLedPin = 13;
void setup() {
  for(int led = firstLedPin; led <= lastLedPin; led= led +1){
    pinMode(led, OUTPUT);
  }
}
void loop() {
  for(int speed=0;speed<=5;speed=speed+1) { //這裡不一樣
    for(int led = firstLedPin; led <= lastLedPin; led= led +1) {
      digitalWrite(led, HIGH);
      delay(speed*20); //這裡不一樣
      digitalWrite(led, LOW);
    }
    for(int led = lastLedPin; led >= firstLedPin; led= led -1) {
      digitalWrite(led, HIGH);
      delay(speed*20); //這裡不一樣
      digitalWrite(led, LOW);
    }
  } //這裡不一樣
}
