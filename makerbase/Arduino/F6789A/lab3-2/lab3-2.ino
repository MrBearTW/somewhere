const int button = 4; //宣告 button 為整數常數, 並將其值設為 4(數位 pin4)
int btVoltage = 0; //將按鈕電位 (btVoltage) 設為整數變數, 初始值為 0

void setup() {
  pinMode(LED_BUILTIN, OUTPUT); //將內建 LED 腳位設為輸出模式
  pinMode(button, INPUT); //將 button 腳位設為輸入模式
}

void loop() {
  btVoltage = digitalRead(button); //讀取按鈕腳位目前的電位值

  if (btVoltage == HIGH){ //若按鈕狀態為高電位
    digitalWrite(LED_BUILTIN, HIGH); //內建 LED 腳位 HIGH, LED亮起
  }
  else{
    digitalWrite(LED_BUILTIN, LOW); //LED 腳位會接收到低電位熄滅
  }
}
