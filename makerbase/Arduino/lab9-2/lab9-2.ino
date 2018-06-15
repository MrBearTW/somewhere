const int thermistorPin = A0;
const int BuzzerPin = 8;
const int alarmVal = 380;

void setup() {
  Serial.begin(9600);
  pinMode(BuzzerPin, OUTPUT);
}

void loop() {
  int thermistorVal = analogRead(thermistorPin);
  Serial.println(thermistorVal);
  delay(5000);
  if (thermistorVal < alarmVal)
    digitalWrite(BuzzerPin, HIGH);
  else digitalWrite(BuzzerPin, LOW);
}
