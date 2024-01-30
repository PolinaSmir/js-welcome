class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  set from(newValue) {
    if (typeof newValue !== "number") {
      throw new TypeError("From must be a number");
    }
    if (newValue > this._to) {
      throw new RangeError("From must be less than To");
    }
    this._from = newValue;
  }

  set to(newValue) {
    if (typeof newValue !== "number") {
      throw new TypeError("To must be a number");
    }
    if (newValue < this._from) {
      throw new RangeError("To must be bigger than From");
    }
    this._to = newValue;
  }

  get from() {
    return this._from;
  }

  get to() {
    return this._to;
  }

  getRange() {
    // let arr = [this._from];
    // for (let i = 0; i < this._to - this._from; i++) {
    //   arr.push(arr[i] + 1);
    // }
    // return arr;
    let arr = [];
    for (let i = this._from; i <= this._to; i++) {
      arr.push(i);
    }
    return arr;
  }
}

const object1 = new RangeValidator(1, 5);
