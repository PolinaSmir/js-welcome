function capitaliseWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitaliseWords("word flower third"));

// function checkSpam(str) {
//   const words = str.toLowerCase();
//   for (let i = 0; i < words.length; i++) {
//     if (words.includes("viagra")) {
//       return true;
//     } else if (words.includes("xxx")) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

function isPalindrom(str) {
  if (str.toLowerCase() === Array.from(str.toLowerCase()).reverse().join("")) {
    return `${str} - палiндром`;
  } else {
    return `${str} - не палiндром`;
  }
}

console.log(isPalindrom("Anna"));
console.log(isPalindrom("Mama"));
console.log(isPalindrom("Namman"));

// function MyArray() {
//   this.length = 0;

//   this.push = function (value) {
//     for (let i = 0; i < arguments.length; i++) {
//       this[this.length] = arguments[i];
//       this.length++;
//     }
//     return this.length;
//   };

//   this.forEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//       callback(this[i], i, this);
//     }
//   };
// }

// const arr = new MyArray();
// arr.push(1);
// arr.push(2);
// arr.push(3, 2, 5, 10, 12, 33);
// const a = [1, 2, 3];
// arr.forEach((item) => {
//   console.log(item);
// });

// function checkSpamDva(str) { // variant 1
//   const lowStr = str.toLowerCase();
//   const result = lowStr.includes("viagra") || lowStr.includes("xxx");
//   return result;
// }

/*
function checkSpam(str) {   // variant 2
  const spamArray = ["viagra", "xxx", "drugs"];
  for (let i = 0; i < spamArray.length; i++) {
    if (str.toLowerCase().includes(spamArray[i])) {
      return true;
    }
  }
  return false;
}

console.log(checkSpam("buy ViAgrA now"));
console.log(checkSpam("free xxxxxxxx ViAgrA"));
console.log(checkSpam("innocent rabbit"));
*/

function checkPalindrom(str) {
  const originalStr = str.toLowerCase();
  const reversedStr = originalStr.split("").reverse().join("");
  return originalStr === reversedStr;
}
console.log(checkPalindrom("Anna"));
console.log(checkPalindrom("Mama"));
console.log(checkPalindrom("Namman"));
