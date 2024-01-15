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
}
const array = new MyArray();
array.push(1);
array.push(2);
array.push(3, 1, 3, 411, 43, 11);
array.pop();
