function addFive(number) {
  console.log(Number(number) + 5);
}

// addFive(prompt());

function addFiveToNumber(number) {
  let result = number + 5;
  console.log(result);
}

// addFiveToNumber(5);

function addTwoNumbers(num1, num2) {
  const result = num1 + num2;
  return result;
}

const functionResult = addTwoNumbers(2, 5);
console.log(functionResult);
