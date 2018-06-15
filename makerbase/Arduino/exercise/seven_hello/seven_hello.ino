/* 
  練習：七段顯示器逐一顯示 HELLO
*/

int helloPattern[5][7] = 
  { {0,1,1,0,1,1,1}, // H
    {1,0,0,1,1,1,1}, // E
    {0,0,0,1,1,1,0}, // L
    {0,0,0,1,1,1,0}, // L
    {1,1,1,1,1,1,0}, // O
  };

int count=0;

  
void setup()
{
  for(int pin = 5; pin <= 11; pin++)
  {
    pinMode(pin, OUTPUT);
  }
}


void sevenSegmentWrite(int digit)
{
  for(int ledSeg = 0; ledSeg < 7; ledSeg++)
  {
    digitalWrite(ledSeg+5, helloPattern[digit][ledSeg]);
  }
}


void allDark()
{
  // 七段顯示全滅
  for(int ledSeg = 0; ledSeg < 7; ledSeg++)
  {
    digitalWrite(ledSeg+5, 0);
  }
}

void loop()
{
  /*
  count = count + 1;
  if(count>4)
  {
    count = 0;
  }
  */
  
  count = (count + 1) % 5;
  
  allDark();
  delay(100);
  
  sevenSegmentWrite(count);
  delay(900);
    
}
