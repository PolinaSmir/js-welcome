// function MyArray() {
//   this.length = 0;

//   this.push = function (value) {
//     this[this.length] = value;
//     this.length++;
//     return this.length;
//   };
// }

function MyArray() {
  this.length = 0;
}
function MyArrayPrototype() {
  this.push = function (value) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length > 0) {
      const lastItem = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return lastItem;
    } else {
      return undefined;
    }
  };
  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}

MyArray.prototype = new MyArrayPrototype();
/*
const array = new MyArray();
array.push(1);
array.push(2);
array.push(3, 1, 3, 411, 43, 11);
array.pop();
array.forEach((item) => {
  console.log(item ** 2);
});
*/
function Ladder() {
  this.currentStair = 0;
}

function LadderPrototype() {
  this.up = function () {
    this.currentStair++;
    return this;
  };
  this.down = function () {
    this.currentStair--;
    return this;
  };
  this.showStair = function () {
    return this.currentStair;
  };
}
Ladder.prototype = new LadderPrototype();

const ladder = new Ladder();
//1   //2   //3    //2     //clg 2
console.log(ladder.up().up().up().down().showStair());
