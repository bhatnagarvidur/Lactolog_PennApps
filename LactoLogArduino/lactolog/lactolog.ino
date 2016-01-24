#define IRsensorPin 9
#define IRledPin 10
#define D13ledPin 13 

void IR38Write() {
  for(int i = 0; i <= 38; i++) {
    digitalWrite(IRledPin, HIGH);
    delayMicroseconds(13);
    digitalWrite(IRledPin, LOW);
    delayMicroseconds(12);
  }
}

void setup() {
  pinMode(IRledPin, OUTPUT);
  digitalWrite(IRledPin, LOW);
  pinMode(D13ledPin, OUTPUT);
  digitalWrite(D13ledPin, LOW);
  Serial.begin(9600); 

}

void loop() {
  IR38Write();
  int serialVal = digitalRead(IRsensorPin);
  Serial.println(serialVal );
  if (serialVal==LOW){
    digitalWrite(D13ledPin, HIGH);
  } else {
    digitalWrite(D13ledPin, LOW);
  }
    delay(10); //wait for the string to be sent

}
