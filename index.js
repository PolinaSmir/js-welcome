let h = 60;
/*
0-15 - 1
15-30 - 2
30-45 - 3
45-60 - 4 peredel
*/
if (h >= 0 && h <= 15) {
  console.log("1 chvert");
} else if (h > 15 && h <= 30) {
  console.log("2 chvert");
} else if (h > 30 && h <= 45) {
  console.log("3 chvert");
} else if (h > 45 && h <= 60) {
  console.log("4 chvert");
} else {
  console.log("Error");
}

/*
rik
kratn 4 i ne kratn 100 ili kratn 400
 */
let r = 2012;
if ((r % 4 === 0 && r % 100 !== 0) || r % 400 === 0) {
  console.log("Vysokosny rok");
} else {
  console.log("Nevysokosny rok");
}

/* Task 3 */
let number = 10;
const start = 5;
const end = 9;
if (number < start || number > end) {
  console.log("Poza diapazonom");
} else {
  console.log("V diapazoni");
}

/* Task 4 */
let lidi = 10;
let ruchka = 15;
let blocknot = 10;
if (ruchka >= lidi && blocknot >= lidi) {
  console.log("Mozet");
} else {
  console.log("Ne mozet");
}

// Task 5
// let age = 10;
// let dokPilgy = false;
// if (age <= 6 && age > 0 && (dokPilgy === true || dokPilgy !== true)) {
//   console.log("Вход бесплатный");
// } else if (age > 12 && dokPilgy !== true) {
//   console.log("Вход стоит 20$");
// } else if (age > 12) {
//   console.log("Вход стоит 10$ (скидка 50%)");
// } else if (age < 0 || typeof age !== "number") {
//   console.log(
//     "Ошибка! Вы ввели некоректный возраст пользователя. Попробуйте ещё раз."
//   );
// } else {
//   console.log("Вход стоит 10$");
// }

// Drugoy sposob
const age = 20;
const hasDiscount = false;
let ticketPrice;

if (age < 0 || typeof age !== "number") {
  console.log(
    "Ошибка! Вы ввели некоректный возраст пользователя. Попробуйте ещё раз."
  );
} else if (age <= 6) {
  ticketPrice = 0;
} else if (age <= 12) {
  ticketPrice = 10;
} else if (hasDiscount) {
  ticketPrice = 10;
} else {
  ticketPrice = 20;
}

if (ticketPrice !== undefined) {
  console.log("Билет стоит " + ticketPrice);
}
