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
    if (name === "" || lastName === "") {
      throw new Error("Name and lastName must be valid");
    }
    this.name = name;
    this.lastName = lastName;
    if (typeof rate !== "number" || typeof daysInThisMonth !== "number") {
      throw new TypeError("Rate and days must be a number");
    }
    if (rate < 0) {
      throw new RangeError("Rate must be a positive number");
    }
    this._rate = Number(rate.toFixed(2));
    if (daysInThisMonth < 0 || daysInThisMonth > 31) {
      throw new RangeError("Days must be in 0 to 31");
    }
    this.daysInThisMonth = daysInThisMonth;
    this.coefficient = coefficient;
  }

  getRate() {
    return this._rate;
  }

  setRate(value) {
    if (typeof value !== "number") {
      throw new TypeError("Rate must be a number");
    }
    if (value < 0) {
      throw new RangeError("Rate must be a positive number");
    }
    this._rate = value;
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
