const MIN_ZP = 7100;
const MIN_DAYS = 21;
const MIN_RATE = MIN_ZP / MIN_DAYS;

class Worker {
  constructor(
    name,
    lastName,
    rate = MIN_RATE,
    daysInThisMonth = MIN_DAYS,
    coefficient
  ) {
    this.name = name;
    this.lastName = lastName;
    this.rate = Number(rate.toFixed(2));

    if (daysInThisMonth < 0 || daysInThisMonth > 31) {
      throw new RangeError("Days must be in 0 to 31");
    }
    this.daysInThisMonth = daysInThisMonth;
    this.coefficient = coefficient;
  }

  set rate(newValue) {
    if (newValue < 0) {
      throw new RangeError("Rate must be positive number");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("Rate must be a number");
    }

    this._rate = newValue;
  }

  get rate() {
    return this._rate;
  }

  set name(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (newValue === "") {
      throw new Error("Name must be valid");
    }
    this._name = newValue;
  }

  get name() {
    return this._name;
  }

  set lastName(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("lastName must be a string");
    }
    if (newValue === "") {
      throw new Error("lastName must be valid");
    }
    this._lastName = newValue;
  }

  get lastName() {
    return this._lastName;
  }

  set daysInThisMonth(newValue) {
    if (typeof newValue !== "number") {
      throw new TypeError("Days must be a number");
    }
    if (newValue < 0 || newValue > 31) {
      throw new RangeError("Days must be in 0 to 31");
    }
    this._daysInThisMonth = newValue;
  }

  get daysInThisMonth() {
    return this._daysInThisMonth;
  }

  set coefficient(newValue) {
    if (newValue < 0) {
      throw new RangeError("Coefficient cannot be negative");
    }
    this._coefficient = newValue;
  }

  get coefficient() {
    return this._coefficient;
  }

  getSalary() {
    if (this.coefficient) {
      return this._rate * this.daysInThisMonth * this.coefficient;
    } else {
      return this._rate * this.daysInThisMonth;
    }
  }
}

const worker1 = new Worker("Alex", "Dane", 23, 5);
const worker2 = new Worker("Dari", "Dane");
