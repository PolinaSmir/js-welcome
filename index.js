const arrOfNum = [3, 6, 8, 2, 3, 5, 1];

function sumOfElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfElements(arrOfNum));
