const int variable = A2; //宣告 variable 為整數常數, 並將其值設為 A2
const int led = 9; //宣告 led 為整數常數, 並將其值設為 9

void setup() {
  //setup()內沒有程式碼
}

void loop() {
  int sensorValue = analogRead(variable);
  //analogRead(variable) 由類比輸入腳位讀取可變電阻的電壓值,
  //並傳回介於 0~1023 的整數值來對應原本的電壓值
  //宣告感測數值變數為整數變數, 其值等於 analogRead(variable) 的傳回值。
  analogWrite(led, sensorValue/4);
  //使用 analogWrite() 將 sensorValue 輸出到 PWM 腳位, 點亮 LED
  //由於 analogWrite() 函式只接受 0~255 之間的數值,
  //所以必須將 sensorValue 除以 4
  delay(150);//延遲程式執行 0.15 秒
}
