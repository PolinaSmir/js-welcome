const arr = [2, 4, 1, 3, 7, 3, 2, 1, 3, 5, 2, 8, 2, 4, 1];

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(arr, 9));

function multyTable(limit) {
  const table = [];
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
      table.push(`${i} * ${j} = ${i * j}`);
    }
  }
  return table;
}

multyTable(1);
multyTable(3);

const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array, whatToFind) {
  //  need review!!!
  if (whatToFind > array.length - 1) {
    return -Infinity;
  }

  let start = 0;
  let end = array.length - 1;
  let middle = Math.round((start + end) / 2);

  while (true) {
    if (array[middle] === whatToFind) {
      return middle;
    }
    if (array[middle] < whatToFind) {
      start = middle;
      middle = Math.ceil((start + end) / 2);
    } else {
      end = middle;
      middle = Math.ceil((start + end) / 2);
    }
  }
}
