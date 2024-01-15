// const numbers = [5, 3, -8, 21, -5, -2, 4];
// function filterFuction(item) {
//   return item > 0;
// }
// const filteredNumbersArray = numbers.filter(filterFuction);

// const array = [5, 3, -8, 21, -5, -2, 4];
// function parniElement(item) {
//   return item % 2 === 0; /// vozvrashaet true/false
// }
// const filteredArray = array.filter(parniElement);

const numbersArray = [2, 3, 1, 2, 34, 21];
function reducer(accumulator, item) {
  return accumulator + item;
}
const sum = numbersArray.reduce(reducer, 0); // 0 nachaln znach, s kotorogo my nacinajem scitat sumu

// sobak po age od starsh do mladsh
const dogArray = [
  {
    nickname: "Tuzik",
    color: "black",
    age: 2,
  },
  {
    nickname: "Dolly",
    color: "white",
    age: 3,
  },
  {
    nickname: "Stus",
    color: "black",
    age: 5,
  },
  {
    nickname: "Fagot",
    color: "black",
    age: 9,
  },
];

dogArray.sort((dog1, dog2) => {
  return dog2.age - dog1.age;
});
// filter and make only white dogs
const dogWhite = dogArray.filter((dog) => {
  return dog.color === "white";
});
