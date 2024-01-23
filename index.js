const date = new Date();
const date1 = new Date("12-31-2023");

console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getFullYear());
console.log(date.getHours());
console.log(date1.getTime());

let sum = 0;
const time1 = new Date();
for (let i = 0; i <= 1000000; i++) {
  sum += i;
}

const time2 = new Date();

console.log(sum);

console.log(time2.getTime() - time1.getTime());

function factorial(x) {
  if (x === 1) {
    return x;
  } else {
    return x * factorial(x - 1);
  }
}

console.log(factorial(5));

function findFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return findFibonacci(n - 1) + findFibonacci(n - 2);
}
console.log(findFibonacci(4)); // оно раскрывается до значения 1 и 0 и потом схлопывается в число по формуле(т.к. там много функций то там формулы)
