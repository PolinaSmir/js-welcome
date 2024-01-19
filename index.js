function capitaliseWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitaliseWords("word flower third"));

function checkSpam(str) {
  let words = str.toLowerCase();
  for (let i = 0; i < words.length; i++) {
    if (words.includes("viagra")) {
      return true;
    } else if (words.includes("xxx")) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkSpam("buy ViAgRa now"));
console.log(checkSpam("free xxxxxx"));
console.log(checkSpam("rabbit innocent"));
