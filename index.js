class Figure {
  constructor(sideQuantity) {
    this.sideQuantity = sideQuantity;
  }

  get sideQuantity() {
    return this._sideQuantity;
  }

  set sideQuantity(newValue) {
    if (newValue < 0) {
      throw new RangeError("Side quantity cannot be less than 0");
    }

    this._sideQuantity = newValue;
  }

  getArea() {}
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super(3);
    this.a = a;
    this.b = b;
    this.angle = angle;
  }

  get a() {
    return this._a;
  }

  set a(newValue) {
    if (newValue < 0) {
      throw new RangeError("Side cannot be less than 0");
    }

    this._a = newValue;
  }

  get b() {
    return this._b;
  }

  set b(newValue) {
    if (newValue < 0) {
      throw new RangeError("Side cannot be less than 0");
    }

    this._b = newValue;
  }

  get angle() {
    return this._angle;
  }

  set angle(newValue) {
    if (newValue < 0) {
      throw new RangeError("Angle cannot be less than 0");
    }

    this._angle = newValue;
  }

  getArea() {
    return this.a * this.b * Math.sin(this.angle);
  }
}

class Square extends Figure {
  constructor(a) {
    super(4);
    this.a = a;
  }

  get a() {
    return this._a;
  }

  set a(newValue) {
    if (newValue < 0) {
      throw new RangeError("Side cannot be less than 0");
    }

    this._a = newValue;
  }

  getArea() {
    return this.a ** 2;
  }
}

const square = new Square(4);

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError("Parameter is not a figure");
}

class Human {
  constructor(fullName, birthYear, gender) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.gender = gender;
  }

  //Setters
  set fullName(value) {
    if (typeof value !== "string") {
      throw new TypeError("Fullname must be a string");
    }
    this._fullName = value;
  }
  set birthYear(value) {
    if (typeof value !== "number") {
      throw new TypeError("BirthYear must be a number");
    }
    this._birthYear = value;
  }
  set gender(value) {
    if (typeof value !== "string") {
      throw new TypeError("Gender must be a string");
    }
    this._gender = value;
  }

  //Get
  get fullName() {
    return this._fullName;
  }
  get birthYear() {
    return this._birthYear;
  }
  get gender() {
    return this._gender;
  }

  // Method

  greeting() {
    let prefix;

    if (this.gender === "male") {
      prefix = "Mr";
    } else if (this.gender === "female") {
      prefix = "Ms";
    } else {
      prefix = prompt("How should we address you?");
    }
    return `Hello, ${prefix} ${this.fullName}`;
  }
}

class Student extends Human {
  constructor(
    fullName,
    birthYear,
    gender,
    admissionYear,
    studentId,
    averageGrade
  ) {
    super(fullName, birthYear, gender);
    this.admissionYear = admissionYear;
    this.studentId = studentId;
    this.averageGrade = averageGrade;
  }

  // Set

  set admissionYear(value) {
    this._admissionYear = value;
  }
  set studentId(value) {
    this._studentId = value;
  }
  set averageGrade(value) {
    if (typeof value !== "number") {
      throw new TypeError("Grade must be a number");
    }
    if (value > 100 || value < 0) {
      throw new RangeError("Average grade must be [0 ; 100]");
    }
    this._averageGrade = value;
  }

  // Get

  get admissionYear() {
    return this._admissionYear;
  }
  get studentId() {
    return this._studentId;
  }
  get averageGrade() {
    return this._averageGrade;
  }

  // Method

  isExcellentStudent() {
    // if (this.averageGrade >= 90) {
    //   return true;
    // }
    // return false;

    // const result = this.averageGrade >= 90 ? true : false;
    // return result;

    return this.averageGrade >= 90;
  }

  static arrayMethod(array) {
    if (array.length === 0) {
      return 0;
    }
    /*
    Var 1
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i].averageGrade;
    }
    return sum / array.length;
    */

    /* var 2

    let sum = 0;
    array.forEach((student) => {
      sum += student.averageGrade;
    });
    return sum / array.length;
    */
    const totalGrade = array.reduce(
      (accumulator, student) => accumulator + student.averageGrade,
      0
    );
    return totalGrade / array.length;
  }
}

const student1 = new Student(
  "Сидоров Сидр Сидорович",
  1999,
  "male",
  2021,
  "A12-F-345",
  95
);
const student2 = new Student("John Doe", 1999, "male", 2021, "A12-F-346", 85);
const student3 = new Student("Jane Doe", 2000, "male", 2022, "A13-F-258", 70);
const student4 = new Student("Josh Doe", 2000, "male", 2022, "A13-F-259", 77);

const students = [student1, student2, student3, student4];
