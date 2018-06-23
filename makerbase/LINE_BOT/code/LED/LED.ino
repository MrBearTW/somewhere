int R=5,B=4,G=3;
char control;
void setup() {
Serial.begin(9600);
pinMode(R,OUTPUT);
pinMode(G,OUTPUT);
pinMode(B,OUTPUT);
}


void loop() {
if(Serial.available()>0){
control=Serial.read();
}

switch(control)
{case 'r': // {case 'r': // {case 'r': // {case 'r': // 顯示紅色
analogWrite(R,0);
analogWrite(G,255);
analogWrite(B,255);
break;
case 'g':// 'g':// 顯示綠色
analogWrite(R,255);
analogWrite(G,0);
analogWrite(B,255);
case 'b':// 'g':// 顯示綠色
analogWrite(R,255);
analogWrite(G,255);
analogWrite(B,0);
break;}
}