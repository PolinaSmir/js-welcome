"use strict";

console.log(this);

function test() {
  console.log(this);
}
test();

const test2 = function () {
  console.log(this);
};

test2();

const test3 = () => {
  console.log(this);
};

test3();

const newspaper = {
  title: "News",
  articles: [
    {
      author: "John Doe",
      date: "23-08-2023",
      text: "lorem",
    },
    {
      author: "Richard Doe",
      date: "23-08-2023",
      text: "lorem",
    },
    {
      author: "Sam Doe",
      date: "23-08-2023",
      text: "lorem",
    },
  ],
  showArticles: function () {
    this.articles.forEach((item, index) => {
      console.log(`${this.title} ${index} - ${item.author}`);
    });
  },
};
newspaper.showArticles();

const number = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}
console.log(sumArray(number));
