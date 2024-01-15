const numbers = [5, 3, -8, 21, -5, -2, 4];
function filterFuction(item) {
  return item > 0;
}
const filteredNumbersArray = numbers.filter(filterFuction);
