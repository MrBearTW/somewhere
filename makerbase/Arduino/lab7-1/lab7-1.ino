const int firstLedPin = 4; //設定開頭 LED 腳位編號, 並設為整數常數
const int lastLedPin = 13; //設定最後 LED 腳位編號, 並設為整數常數
void setup() {
  for(int led = firstLedPin; led <= lastLedPin; led= led +1){
    pinMode(led, OUTPUT); //將每個數位輸出入腳位 (4~13) 設為 OUTPUT 模式
  }
}
void loop() {
  for(int led = firstLedPin; led <= lastLedPin; led= led +1) {
    digitalWrite(led, HIGH); //將高電位輸出到 led 腳位
    delay(100);
    digitalWrite(led, LOW); //將低電位輸出到 led 腳位
  }
  for(int led = lastLedPin; led >= firstLedPin; led= led -1) {
    digitalWrite(led, HIGH); //把高電位輸出到 led 腳位
    delay(100);
    digitalWrite(led, LOW); //將低電位輸出到 led 腳位
  }
}
