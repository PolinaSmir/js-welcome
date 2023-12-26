// const monthNumber = 12;

// switch (monthNumber) {
//   case 1:
//   case 2:
//   case 12: {
//     console.log("zima");
//     break;
//   }
//   case 3:
//   case 4:
//   case 5: {
//     console.log("jaro");
//     break;
//   }
//   case 6:
//   case 7:
//   case 8: {
//     console.log("leto");
//     break;
//   }
//   case 9:
//   case 10:
//   case 11: {
//     console.log("podzim");
//     break;
//   }
//   default: {
//     console.log("Enter number from 1 to 12");
//   }
// }

/*
const number = Number(
  prompt("Введите номер напитка 1-Сок, 2-Вода, 3-Кофе, 4-Чай, 5-Лимонад ")
);
switch (number) {
  case 1: {
    console.log("Сок");
    break;
  }
  case 2: {
    console.log("Вода");
    break;
  }
  case 3: {
    console.log("Кофе");
    break;
  }
  case 4: {
    console.log("Чай");
    break;
  }
  case 5: {
    console.log("Лимонад");
    break;
  }
  default: {
    console.log("Пожалуйста, введите число от 1 до 5");
  }
}
*/

// Task 2 calculator

const num1 = Number(prompt("Введите первое число: "));
const num2 = Number(prompt("Введите второе число: "));
const operation = prompt(
  "Введите один из вариантов мат. операции: +, -, *, / "
);
switch (operation) {
  case "+": {
    console.log(num1 + num2);
    break;
  }
  case "-": {
    console.log(num1 - num2);
    break;
  }
  case "*": {
    console.log(num1 * num2);
    break;
  }
  case "/": {
    console.log(num1 / num2);
    break;
  }
  default: {
    console.log("Ошибка! Повторите операцию ещё раз.");
  }
}
