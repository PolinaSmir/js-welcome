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

const userId = new Map();

userId.set(user1.id, johnMessages);
userId.set(user2.id, alexMessages);

function findMessage(id, userId) {
  if (userId.has(id)) {
    return `Your messages are: ${userId.get(id)}`;
  } else {
    return "You don't have any messages";
  }
}
