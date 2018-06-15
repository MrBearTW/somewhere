const int analogPin = A2; //用類比 A2 腳位來讀取可變電阻的電壓
int readVal ; //用readVal來存放讀到的值

void setup() {
  Serial.begin(9600); //開啟序列埠, 並設定鮑率
}

void loop() {
  readVal = analogRead(analogPin); //用 analogRead 函式讀取可變電阻的電壓值
  Serial.println(readVal); //將讀到的值傳送到序列埠監控視窗
  delay(300);
}
