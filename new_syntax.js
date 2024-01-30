const MIN_ZP = 7100;
const MIN_DAYS = 21;
const MIN_RATE = MIN_ZP / MIN_DAYS;

class Worker {
  constructor(name, lastName, payment = MIN_RATE, daysInThisMonth = MIN_DAYS) {
    this.name = name;
    this.lastName = lastName;
    this.payment = Number(payment.toFixed(2)); // округление + откидывание нуля в конце при помощи Number
    this.daysInThisMonth = daysInThisMonth;
  }

  getPayCheckInThisMonth() {
    return this.payment * this.daysInThisMonth;
  }
}

const worker1 = new Worker("Alex", "Dane", 23, 5);
const worker2 = new Worker("Dari", "Dane");

class Fuel {
  constructor(volume, density) {
    this.volume = volume;
    this.density = density;
  }

  getWeight() {
    return this.volume * this.density;
  }
}

const benzin = new Fuel(50, 0.9);

class Auto {
  constructor(name, ownWeight, fuel) {
    this.name = name;
    this.ownWeight = ownWeight;
    this.fuel = fuel;
  }

  getFullWeight() {
    return this.ownWeight + this.fuel.getWeight();
  }
}

const bmw = new Auto("BMW", 4000, benzin);
