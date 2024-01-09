/*
const arrOfNum = [3, 6, 8, 2, 3, 5, 1];

function sumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfElements(arrOfNum));


const arrOfNum = [3, 6, 8, 2, 3, 5, 1];

function maxNumberOfArray(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxNumberOfArray(arrOfNum));
*/

const arrOfNum = [3, 6, 8, 2, 3, 5, 1];

function sredArifm(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let sredArifm = sum / arr.length;
  return sredArifm;
}
console.log(sredArifm(arrOfNum));
