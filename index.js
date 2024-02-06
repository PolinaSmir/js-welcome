/*
const set = new Set([2, 3, 3, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13]);
console.log([...set.values()]);

const arrWithoutDoubles = [
  ...new Set([2, 3, 3, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13]),
];
*/

const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11];

function twoArrayWithoutDoubles(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
const currentDate = new Date();
function currentDateDisplay() {
  const currentDate = new Date();
  let day = currentDate.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // switch (currentDate.getDay()) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  // }

  //   console.log(`Today is : ${dayNames[day]}.
  // Current time is: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`);
  return `Today is : ${
    dayNames[day]
  }. Current time is: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}
