const int sensorPin = A2;
int relayPin = 2;
void setup()
{
  pinMode(relayPin, OUTPUT);    
  pinMode(sensorPin,INPUT);
  Serial.begin(9600);
}
 
void loop()
{
  int moist;
  moist = analogRead(sensorPin);
  Serial.println(moist);
  
  // 乾燥程度大於 600 時，啟動繼電器，水泵開始吸水
  if (moist > 600) 
       digitalWrite(relayPin, HIGH);
  else
      digitalWrite(relayPin, LOW);
  delay(1000);
}
