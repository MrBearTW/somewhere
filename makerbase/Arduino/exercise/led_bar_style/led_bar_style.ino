
// output led
int p0 = 4;
int p1 = 5;
int p2 = 6;
int p3 = 7;
int p4 = 8;
int p5 = 9;
int p6 = 10;
int p7 = 11;
int p8 = 12;
int p9 = 13;

int u = 500;

void setup()
{
  pinMode(p0, OUTPUT);
  pinMode(p1, OUTPUT);
  pinMode(p2, OUTPUT);
  pinMode(p3, OUTPUT);
  pinMode(p4, OUTPUT);
  pinMode(p5, OUTPUT);
  pinMode(p6, OUTPUT);
  pinMode(p7, OUTPUT);
  pinMode(p8, OUTPUT);
  pinMode(p9, OUTPUT);
}


void loop()                     
{
  for(int i=0; i<10; i++) { type_a1(); }
  for(int i=0; i<5 ; i++) { type_a2(); }
  for(int i=0; i<5 ; i++) { type_a3(); }
  for(int i=0; i<5 ; i++) { type_a4(); }
  for(int i=0; i<5 ; i++) { type_a5(); }

  for(int i=0; i<5 ; i++) { type_b1(); }  
  for(int i=0; i<5 ; i++) { type_b2(); }  
  
  for(int i=0; i<10; i++) { type_c1(); }
  for(int i=0; i<2 ; i++) { type_c2(); }
  
}


void led(int a0, int a1, int a2, int a3, int a4, int a5, int a6, int a7, int a8, int a9)
{
    digitalWrite(p0, a0);
    digitalWrite(p1, a1);
    digitalWrite(p2, a2);
    digitalWrite(p3, a3);
    digitalWrite(p4, a4);
    digitalWrite(p5, a5);
    digitalWrite(p6, a6);
    digitalWrite(p7, a7);
    digitalWrite(p8, a8);
    digitalWrite(p9, a9);
}


void type_a1()
{
   u = 200;
   led(rand()%2, rand()%2, rand()%2, rand()%2, rand()%2, rand()%2, rand()%2, rand()%2, rand()%2, rand()%2);
   delay(u);
}


void type_a2()
{
    u=1000;
    led(1,1,1,1,1,1,1,1,1,1);  delay(u);
    led(0,0,0,0,0,0,0,0,0,0);  delay(u);
}


void type_a3()
{
    u = 500;
    led(1,0,1,0,1,0,1,0,1,0);  delay(u);
    led(0,1,0,1,0,1,0,1,0,1);  delay(u);
}


void type_a4()
{
    u = 200;
    led(0,1,1,1,1,1,1,1,1,1);  delay(u);
    led(1,0,1,1,1,1,1,1,1,1);  delay(u);
    led(1,1,0,1,1,1,1,1,1,1);  delay(u);
    led(1,1,1,0,1,1,1,1,1,1);  delay(u);
    led(1,1,1,1,0,1,1,1,1,1);  delay(u);
    led(1,1,1,1,1,0,1,1,1,1);  delay(u);
    led(1,1,1,1,1,1,0,1,1,1);  delay(u);
    led(1,1,1,1,1,1,1,0,1,1);  delay(u);
    led(1,1,1,1,1,1,1,1,0,1);  delay(u);
    led(1,1,1,1,1,1,1,1,1,0);  delay(u);
}


void type_a5()
{
    u=100;
    led(1,0,0,0,0,0,0,0,0,0);  delay(u);
    led(0,1,0,0,0,0,0,0,0,0);  delay(u);
    led(0,0,1,0,0,0,0,0,0,0);  delay(u);
    led(0,0,0,1,0,0,0,0,0,0);  delay(u);
    led(0,0,0,0,1,0,0,0,0,0);  delay(u);
    led(0,0,0,0,0,1,0,0,0,0);  delay(u);
    led(0,0,0,0,0,0,1,0,0,0);  delay(u);
    led(0,0,0,0,0,0,0,1,0,0);  delay(u);
    led(0,0,0,0,0,0,0,0,1,0);  delay(u);
    led(0,0,0,0,0,0,0,0,0,1);  delay(u);
}


void type_b1()
{
    u=100;
    led(1,1,1,1,1,1,1,1,1,1);  delay(u);
    led(1,1,1,1,0,0,1,1,1,1);  delay(u);
    led(1,1,1,0,0,0,0,1,1,1);  delay(u);
    led(1,1,0,0,0,0,0,0,1,1);  delay(u);
    led(1,0,0,0,1,1,0,0,0,1);  delay(u);
    led(0,0,0,1,1,1,1,0,0,0);  delay(u);
    led(0,0,1,1,1,1,1,1,0,0);  delay(u);
    led(0,1,1,1,1,1,1,1,1,0);  delay(u);
}


void type_b2()
{
    u=100;
    led(0,0,0,1,0,0,0,0,0,0);  delay(u);
    led(0,0,1,1,1,0,0,0,0,0);  delay(u);
    led(0,1,1,1,1,1,0,0,0,0);  delay(u);
    led(1,1,1,1,1,1,1,0,0,0);  delay(u);
    led(1,1,1,1,1,1,1,1,0,0);  delay(u);
    led(1,1,1,1,1,1,1,1,1,0);  delay(u);
    led(1,1,1,1,1,1,1,1,1,1);  delay(u);
}



void type_c1()
{
    led(0,0,0,0,0,0,0,0,0,0);  delay(800);
    led(1,1,1,1,1,1,1,1,1,1);  delay(400);
    led(0,0,0,0,0,0,0,0,0,0);  delay(100);
    led(1,1,1,1,1,1,1,1,1,1);  delay(200);
    led(0,0,0,0,0,0,0,0,0,0);  delay(100);
    led(1,1,1,1,1,1,1,1,1,1);  delay(200);
    led(0,0,0,0,0,0,0,0,0,0);  delay(100);
    led(1,1,1,1,1,1,1,1,1,1);  delay(200);
    led(0,0,0,0,0,0,0,0,0,0);  delay(100);
}


void type_c2()
{
  for(u=500; u>10; u-=50)
  {
    led(1,0,0,0,0,0,0,0,0,0);  delay(u);
    led(0,1,0,0,0,0,0,0,0,0);  delay(u);
    led(0,0,1,0,0,0,0,0,0,0);  delay(u);
    led(0,0,0,1,0,0,0,0,0,0);  delay(u);
    led(0,0,0,0,1,0,0,0,0,0);  delay(u);
    led(0,0,0,0,0,1,0,0,0,0);  delay(u);
    led(0,0,0,0,0,0,1,0,0,0);  delay(u);
    led(0,0,0,0,0,0,0,1,0,0);  delay(u);
    led(0,0,0,0,0,0,0,0,1,0);  delay(u);
    led(0,0,0,0,0,0,0,0,0,1);  delay(u);
  }
  for(u=50; u>10; u-=3)
  {
    led(1,0,0,0,0,0,0,0,0,0);  delay(u);
    led(0,1,0,0,0,0,0,0,0,0);  delay(u);
    led(0,0,1,0,0,0,0,0,0,0);  delay(u);
    led(0,0,0,1,0,0,0,0,0,0);  delay(u);
    led(0,0,0,0,1,0,0,0,0,0);  delay(u);
    led(0,0,0,0,0,1,0,0,0,0);  delay(u);
    led(0,0,0,0,0,0,1,0,0,0);  delay(u);
    led(0,0,0,0,0,0,0,1,0,0);  delay(u);
    led(0,0,0,0,0,0,0,0,1,0);  delay(u);
    led(0,0,0,0,0,0,0,0,0,1);  delay(u);
  }
}
