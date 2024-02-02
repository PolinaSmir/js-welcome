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

class Queue {
  constructor() {
    this._head = 0;
    this._tail = 0;
  }
  get size() {
    return this._tail - this._head;
  }

  enqueue(value) {
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }
  dequeue() {
    if (this.size > 0) {
      const firstItem = this[this._head];
      delete this[this._head];
      this._head++;
      return firstItem;
    }
    return undefined;
  }
}
const queue = new Queue();
