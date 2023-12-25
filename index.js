let firstOperand = Number(prompt("Put in first number: "));
let secondOperand = Number(prompt("Put in second number: "));
let result = firstOperand + secondOperand;
if (Number.isNaN(result)) {
  console.log("Ты не прав, введи число");
} else {
  console.log(result);
}
