const int variable = A2; //宣告 variable 為整數常數, 並將其值設為 A2
const int led = 9; //宣告 led 為整數常數, 並將其值設為 9

void setup() {
  //setup()內沒有程式碼
}

void loop() {
  int sensorValue = analogRead(variable);
  int value = map(sensorValue, 0, 1023, 0, 255);
  analogWrite(led, value);
  delay(value);
  analogWrite(led, 0);
  delay(value);
}
