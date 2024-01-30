class Test {
  constructor(value1, value2) {
    this.key1 = value1;
    this.key2 = value2;
  }

  method() {
    // method's body
  }
  static myStaticMethod(parameter) {
    console.log(parameter);
  }
}

Test.myStaticMethod("123");
const obj1 = new Test("test1", "tast2");
