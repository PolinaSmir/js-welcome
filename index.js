function greetingUser(user) {
  return `Hey ${user.name} ${user.surname}. You will turn ${
    user.age + 1
  } next year`;
}

// та у нас є об'єкт
const user = {
  name: "John",
  surname: "Doe",
  age: 19,
};

greetingUser(user);
