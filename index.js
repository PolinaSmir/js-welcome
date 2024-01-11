const arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 2));

const arr2 = [1, 2, 3, 4];
console.log(arr2.slice(1));

const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 0, "w", "tr-td");
arr3.splice(6, 0, "vv");
arr3.splice(8, 0, "aa");
console.log(arr3);
