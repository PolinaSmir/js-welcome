// function biggerNumber(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1);
//   } else if (num1 === num2) {            // Peredel
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }

// biggerNumber(4, 5);

function averageOfTwoNumbers(num1, num2) {
  const result = (num1 + num2) / 2;
  return result;
}

// console.log(averageOfTwoNumbers(1, 2));

const number = Number(prompt("Enter number: "));
//const number2 = Number(prompt('Enter number2: '));

function evenNumber(number) {
  if (number % 2 === 0) {
    console.log(number + " является чётным числом");
  } else {
    console.log(number + " не является чётным числом");
  }
}
evenNumber(number);
