const int buzzerPin = 8;      //宣告 buzzerPin 為整數常數, 並將其值設為 8
const int analogIn = A0;      //宣告 analogIn 為整數常數, 並將其值設為 A0
const int highAlertVal = 400; //宣告 highAlertVal 為整數常數, 並將其值設為 400
const int lowAlertVal = 200;  //宣告 lowAlertVal 為整數常數, 並將其值設為 200
int wetVal = 0; //宣告 wetVal 為整數變數, 並將其初始值設為 0

void setup() {
  Serial.begin(9600); //開啟序列埠, 並將其值設為 9600
  pinMode(buzzerPin, OUTPUT); //將 buzzerPin 的腳位模式設為輸出 (OUTPUT)
}

void loop() {
  wetVal = analogRead(analogIn);
  //由類比輸入腳位讀取潮濕感測器的數值, 並將回傳的數值設為 wetVal
  Serial.println(wetVal); //在序列埠視窗顯示 wetVal 的數值, 並自動換行
  if( wetVal > highAlertVal || wetVal < lowAlertVal){
    //如果 wetVal 大於 highAlertVal 或 wetVal 小於 lowAlertVal
    digitalWrite(buzzerPin, HIGH); // 輸出高電位 (HIGH)的訊號到 buzzerPin 腳位
  }
  else{ //否則
    digitalWrite(buzzerPin, LOW); //輸出低電位 (LOW) 的訊號到 buzzerPin 腳位
  }
  delay(1000); //使程式停留在上一行的狀態1秒鐘
}
