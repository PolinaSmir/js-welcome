// const number = Number(prompt("Введите число: "));

// if (number % 5 === 0) {
//   console.log(number + " нацело делиться на 5");
// } else if (number % 3 === 0) {
//   console.log(number + " нацело делиться на 3");
// } else if (number % 2 === 0) {
//   console.log(number + " нацело делиться на 2");
// } else {
//   console.log(number + " не делиться нацело ни на 5, ни на 3, ни на 2");
// }

const monthNumber = 12;

switch (monthNumber) {
  case 1:
  case 2:
  case 12: {
    console.log("zima");
    break;
  }
  case 3:
  case 4:
  case 5: {
    console.log("jaro");
    break;
  }
  case 6:
  case 7:
  case 8: {
    console.log("leto");
    break;
  }
  case 9:
  case 10:
  case 11: {
    console.log("podzim");
    break;
  }
  default: {
    console.log("Enter number from 1 to 12");
  }
}
