const int led = 3; //宣告整數常數 led, 並將其值設為 3

void setup() {
  //setup()內不須寫入程式碼
}

void loop() {

  
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue =fadeValue + 15)
  //設定後方 {} 內 fadeValue 變數的初始值、條件、每執行一次的變化量
  {
    analogWrite(led, fadeValue); //將 PWM 調整後的電壓值輸出到指定的 PWM 腳位
    delay(50); //使程式停止在上一行的階段 0.1 秒
  }

  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue =fadeValue - 15)
  //設定後方 {} 內 fadeValue 變數的初始值、條件、每執行一次的變化量
  {
    analogWrite(led, fadeValue); //將 PWM 調整後的電壓值輸出到指定的 PWM 腳位
    delay(50); //使程式停止在上一行的階段 0.1 秒
  }
}
