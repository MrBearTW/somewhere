/*
Welcome. Today is community time of Maker's Attic at Maker Lab, Kaohsiung.
Instructor: 顓豪(Hank)
Students: Yuka, Chia-Chi, Charles
This is example for ulrasonic senso reading and LED on Arduino UNO Board.
Have fun. :)
  Nov. 09 2017
*/
#include <Servo.h>
Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int trig = 12;                        //connect sensor pin Trig to pin hole 12 on Arduino UNO
int echo = 13;                        //connect sensor pin Trig to pin hole 13 on Arduino UNO
int inter_time = 1000;                //set time interval to 1000ms
int warning = 10;                      //set warning condition to 1000ms
int pos = 0;

void setup() {                       //void setup() {set-up conditions}
  Serial.begin(9600);                 //set Baud rate to 9600
  pinMode (trig, OUTPUT);            //set trig to send ultrasonic
  pinMode (echo, INPUT);             //set echo to recive ultrasonic
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {                       //void loop() {runs in this loop}
  float duration, distance;         //define "duration", "distance" as float-datatype variables
  digitalWrite(trig, HIGH);         //get input high signal
  delayMicroseconds(1000);          //reaction interval at least 10us
  digitalWrite(trig, LOW);          //get input low signal
  duration = pulseIn (echo, HIGH);  //calculate duration when "echo" recive high signal
  distance = (duration/2)/29;       //calculate distance from half of duration ,and turns meter into cm
  Serial.print(" d = ");            //show "d =" on monitor
  Serial.print(distance);           //show the result of calculated distance on monitor
  Serial.println(" cm");            //show "cm" on monitor
   if (distance < warning && pos==0) {     //if(setup the condition) { action }
    for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(20);                       // waits 15ms for the servo to reach the position
    }
    pos = 180;
  }
  if(distance > warning && pos==180){       //If the setup conidtion is false
    for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(20);                       // waits 15ms for the servo to reach the position
    }
    pos = 0;
  }
  delay(inter_time);               //delay time
}
