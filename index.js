const arr = [2, 5, 14, 7, 8, 7, 2, 9, 8, 1];
arr.sort();
const letter = ["aaa", "ada", "aay"];
letter.sort();

function compareFunction(a, b) {
  if (b > a) {
    return -1;
  } else {
    return 1;
  }
}
arr.sort(compareFunction);

const numbersArray = [4, 1, 58, 10, 6, -5];
function compareNumbers(a, b) {
  return a - b; // reverse b-a // a-b vozrastanie
}
numbersArray.sort(compareNumbers);
