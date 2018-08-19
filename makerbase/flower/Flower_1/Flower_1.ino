const int sensorPin = A2;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int v = analogRead(sensorPin);
  Serial.println(v);
  delay(1000);
}

