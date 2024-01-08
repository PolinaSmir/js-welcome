function greeting(user) {
  return `Hello ${"name" in user ? user.name : "Anonym"}`;
}

const user = {
  name: "Peter",
  email: "john@email.com",
};
