const int analogPin = A0;
int Vin = 0;
const int presetVal = 400;
const int ledPin = 8;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  Vin = analogRead(analogPin);
  if (Vin < presetVal) {
      digitalWrite(ledPin, HIGH);
  }
  if (Vin > presetVal) {
    digitalWrite(ledPin, LOW);
  }

}
