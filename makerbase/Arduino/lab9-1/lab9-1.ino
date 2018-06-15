const int thermistorPin = A0;
const int BuzzerPin = 8;
void setup() {
  Serial.begin(9600);
  pinMode(BuzzerPin, OUTPUT);
}

void loop() {
  int thermistorVal = analogRead(thermistorPin);
  Serial.println(thermistorVal);
  delay(5000);

}
