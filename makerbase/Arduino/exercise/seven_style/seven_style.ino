/* 
  練習：七段顯示器顯示各種樣式
  共陰
  七段顯示器的接腳：5, 6, 7, 8, 9, 10, 11 (必須連續)
  (小數點的p腳沒有使用到)
*/

const int button = 2; //把 button 腳位設為 2
int pinA=5;  // 七段顯示器的起始腳位
int style_total = 8;  // 此程式內共有幾種類型 (輪替)

int style=0;
int count=0;


void setup()
{
  for(int pin=0; pin<7; pin++)
  {
    pinMode(pinA+pin, OUTPUT);
  }
  pinMode(button, INPUT); 
}


void sevenSegmentWritePattern(int a, int b, int c, int d, int e, int f, int g, int ms)
{
  // 傳入位置a~g的值 (0/1)，最後一個參數是 delay的值
   digitalWrite(pinA, a);
   digitalWrite(pinA+1, b);
   digitalWrite(pinA+2, c);
   digitalWrite(pinA+3, d);
   digitalWrite(pinA+4, e);
   digitalWrite(pinA+5, f);
   digitalWrite(pinA+6, g);
   delay(ms);
   
}


void loop()
{
  int buttonStatus = 0; //buttonStatus 為按鈕狀態變數, 並將其值設為 0
  buttonStatus = digitalRead(button);
  // delay(100);   //程式維持在上一行的狀態 0.1 秒
  
  if (buttonStatus == HIGH)
  {
    style = (style + 1) % 5;  // 共有五種樣式
  }

  // count 定時要更換
  count = count + 1;
  if(count>10)
  {
    count = 0;
    style = (style+1) % style_total;
  }

  switch(style)
  {
    case 0: 
      // 樣式：繞圈圈
      sevenSegmentWritePattern(1, 0, 0, 0, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 1, 0, 0, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 1, 0, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 0, 1, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 0, 0, 1, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 0, 0, 0, 1, 0, 100);
      break;


    case 1: 
      // 樣式：繞圈圈 (長度2格)
      sevenSegmentWritePattern(1, 1, 0, 0, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 1, 1, 0, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 1, 1, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 0, 1, 1, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 0, 0, 1, 1, 0, 100);
      sevenSegmentWritePattern(1, 0, 0, 0, 0, 1, 0, 100);
      break;


    case 2: 
      // 樣式：繞圈圈 (長度3格)
      sevenSegmentWritePattern(1, 1, 1, 0, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 1, 1, 1, 0, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 1, 1, 1, 0, 0, 100);
      sevenSegmentWritePattern(0, 0, 0, 1, 1, 1, 0, 100);
      sevenSegmentWritePattern(1, 0, 0, 0, 1, 1, 0, 100);
      sevenSegmentWritePattern(1, 1, 0, 0, 0, 1, 0, 100);
      break;


  case 3:
    // 樣式：8字型 (長度2格)
    /*
    sevenSegmentWritePattern(1, 0, 0, 0, 0, 0, 0, 100);
    sevenSegmentWritePattern(0, 1, 0, 0, 0, 0, 0, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 0, 0, 1, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 1, 0, 0, 100);
    sevenSegmentWritePattern(0, 0, 0, 1, 0, 0, 0, 100);
    sevenSegmentWritePattern(0, 0, 1, 0, 0, 0, 0, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 0, 0, 1, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 0, 1, 0, 100);
    */
    sevenSegmentWritePattern(1, 1, 0, 0, 0, 0, 0, 100);
    sevenSegmentWritePattern(0, 1, 0, 0, 0, 0, 1, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 1, 0, 1, 100);
    sevenSegmentWritePattern(0, 0, 0, 1, 1, 0, 0, 100);
    sevenSegmentWritePattern(0, 0, 1, 1, 0, 0, 0, 100);
    sevenSegmentWritePattern(0, 0, 1, 0, 0, 0, 1, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 0, 1, 1, 100);
    sevenSegmentWritePattern(1, 0, 0, 0, 0, 1, 0, 100);
    break;


  case 4:
    // 樣式：上下兩小圓閃礫
    sevenSegmentWritePattern(1, 1, 0, 0, 0, 1, 1, 500);
    sevenSegmentWritePattern(0, 0, 1, 1, 1, 0, 1, 500);
    break;


  case 5:
    // 樣式：縱橫輪替
    sevenSegmentWritePattern(1, 0, 0, 1, 0, 0, 1, 500);
    sevenSegmentWritePattern(0, 1, 1, 0, 1, 1, 0, 500);
    break;
    
    
  case 6:
    // 樣式：逐一填滿又逐一消失
    sevenSegmentWritePattern(1, 0, 0, 0, 0, 0, 0, 100);
    sevenSegmentWritePattern(1, 1, 0, 0, 0, 0, 0, 100);
    sevenSegmentWritePattern(1, 1, 1, 0, 0, 0, 0, 100);
    sevenSegmentWritePattern(1, 1, 1, 1, 0, 0, 0, 100);
    sevenSegmentWritePattern(1, 1, 1, 1, 1, 0, 0, 100);
    sevenSegmentWritePattern(1, 1, 1, 1, 1, 1, 0, 100);
    sevenSegmentWritePattern(0, 1, 1, 1, 1, 1, 0, 100);
    sevenSegmentWritePattern(0, 0, 1, 1, 1, 1, 0, 100);
    sevenSegmentWritePattern(0, 0, 0, 1, 1, 1, 0, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 1, 1, 0, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 0, 1, 0, 100);
    sevenSegmentWritePattern(0, 0, 0, 0, 0, 0, 0, 200); // 暫停
    break;


  case 7:
    // 樣式：全亮、全滅閃礫
    sevenSegmentWritePattern(0, 0, 0, 0, 0, 0, 0, 200);
    sevenSegmentWritePattern(1, 1, 1, 1, 1, 1, 1, 200);
    break;

  }
  
}
