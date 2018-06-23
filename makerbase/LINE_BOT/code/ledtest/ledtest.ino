int led=15;
void setup()  {
pinMode(led, OUTPUT);  // 宣告腳位
}
void loop() {
digitalWrite  (led, HIGH);  // 輸出高電位 (開燈 )
delay(1000);  // 延遲 1秒
digitalWrite  (led, LOW); // 輸出低電位 (關燈 )
delay(1000);
}
