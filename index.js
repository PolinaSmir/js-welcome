// const user = {
//   name: "John",
//   "favourite color": "red",
//   0: "value",
// };

// console.log(user.name);
// // user.'favourite color'; syntax error
// // user.0; also syntax error
// console.log(user["favourite color"]);
// console.log(user[0]);

// const someObj = {
//   2: 10,
// };

// console.log(someObj[2]);
// console.log(someObj["2"]);

const greets = {
  15: "Hi",
  17: "Yo, whats up",
  19: "Hello",
  30: "Good morning",
};

const valueFromUser = 19;

console.log(greets[valueFromUser]); // Hello
// greets[19]

const obj = {
  Mon: "drive lesson",
  Tue: "dentist visit",
  Wed: "go to party",
  Thu: "hard work",
  Fri: "chill",
  Sat: "go to park",
};

const nameOfDay = prompt(
  "Type your week day to check your plan: \n Monday = Mon, \n Tuesday = Tue, \n ..."
);
alert(obj[nameOfDay] ? obj[nameOfDay] : "Error");
