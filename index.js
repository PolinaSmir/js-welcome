const oldArray = [2, 3, 4, 5, 1, 2];
const newArray = oldArray
  .map((item) => {
    return item * 2;
  })
  .reverse()
  .join(",");
