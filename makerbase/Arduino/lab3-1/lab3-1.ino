void setup() {
  pinMode(7, OUTPUT); //13 改成 7
}

void loop() {
  digitalWrite(7, HIGH); //13 改成 7
  delay(500);
  digitalWrite(7, LOW); //13 改成 7
  delay(500);
}
