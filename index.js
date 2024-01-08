// function greeting(user) {
//   return `Hello ${"name" in user ? user.name : "Anonym"}`;
// }

// const user = {
//   name: "Peter",
//   email: "john@email.com",
// };

const user = {
  name: "John",
  lastName: "Doe",
  age: 20,
  "favourite color": "red",
  movie: "Twilight",
  avatar: "http://.....",
};
// for (let key in user) {
//   console.log(`${key} ---> ${user[key]}`); // key ---> value
// }

const obj = {
  key1: "value 1",
  key2: "valUe 2",
  key3: "valuE 3",
};

function style(obj) {
  for (let key in obj) {
    console.log(`"${key}": *${obj[key]}*`);
  }
}
