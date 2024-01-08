const departmentSalary = {
  HR: 120000,
  development: 550000,
  PR: 50000,
  marketing: 120000,
  assistant: undefined,
  ab: "gsf",
};

function sumOfWasteSalary(departmentSalary) {
  let sum = 0;
  let nameOfUndefined;
  for (let key in departmentSalary) {
    if (typeof departmentSalary[key] === "number") {
      sum += departmentSalary[key];
    } else {
      nameOfUndefined = key;
      console.log(
        `You have undefined salary for department: ${nameOfUndefined}`
      );
    }
  }
  return sum;
}

console.log(sumOfWasteSalary(departmentSalary));
