class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}

const user1 = new User("Alex", "Dane", 23);
const user2 = new User("Dari", "Dane", 23);

class Worker {
  constructor(name, lastName, payment, daysInThisMonth) {
    this.name = name;
    this.lastName = lastName;
    this.payment = payment;
    this.daysInThisMonth = daysInThisMonth;
  }

  getPayCheckInThisMonth() {
    return this.payment * this.daysInThisMonth;
  }
}

const worker1 = new Worker("Alex", "Dane", 23, 5);
const worker2 = new Worker("Dari", "Dane", 23, 10);
