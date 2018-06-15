void setup() { //"{"表示setup()函式由此開始
  pinMode(13, OUTPUT); //將第 13 號腳位設為 OUTPUT 模式
} //"}"表示函式到此結束

void loop() { //"{"表示 loop() 函式由此開始
  digitalWrite(13, HIGH); //將高電位輸出到第 13 號腳位
  delay(500); //使程式暫停 0.5 秒, 維持在上一行所執行的狀態
  digitalWrite(13, LOW); //將低電位輸出到第 13 號腳位
  delay(500); //使程式暫停 0.5 秒, 維持在上一行所執行的狀態
} //"}"表示函式到此結束

