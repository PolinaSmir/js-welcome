const user1 = {
  firstName: "Alex",
  lastName: "Doe",
  id: 1,
};

const user2 = {
  firstName: "John",
  lastName: "Doe",
  id: 2,
};
const johnMessages = ["hello", "How are you?"];
const alexMessages = ["hi!", "I`m fine"];

const findMessage = new Map();

findMessage.set(user1, user1.id);
findMessage.set(user2, user2.id);

const vocabulary = new Map();

vocabulary.set("cat", "кошка");
vocabulary.set("dog", "собака");
vocabulary.set("eat", "есть");

function translator(str, vocabulary) {
  const arrayWords = str.trim().toLowerCase().split(" ");
  const translatedArray = arrayWords.map((word) => {
    if (vocabulary.has(word)) {
      return vocabulary.get(word);
    } else {
      return word;
    }
  });
  return translatedArray.join(" ");
}

console.log(translator("  Cat eat dog  ", vocabulary));
