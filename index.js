// const array = [1, 2, 3, 4, 5];

// array.forEach((a) => {
//   console.log(a * a);
// });

// // const square = (a) => a * a; -- strelocnaja funkce

// const new_arr = array.map((item) => {
//   return item - 1;
// });
// function minusOne(a) {
//   return a - 1;
// }

const users = [
  {
    name: "John",
    lastName: "Doe",
    age: 19,
    email: "ligma@mail.com",
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 22,
    email: "ligmajane@mail.com",
  },
  {
    name: "Jackson",
    lastName: "Michael",
    age: 55,
    email: "jackson@mail.com",
  },
];

function newUserObject(user) {
  return {
    fullname: `${user.name} ${user.lastName}`,
    email: user.email,
  };
}
const new_users = users.map(newUserObject);
