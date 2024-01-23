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
