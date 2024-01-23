/**
 * Повертае х у ступени n
 *
 * @param {number} x число, яке треба пиднести до степеня
 * @param {number} n степень, у яку треба пиднести
 * @return {number} х пиднесене у n-нну степинь
 */
function pow(x, n) {
  return x ** n;
}

function sumOfPositiveNumber(a, b) {
  if (a < 0 || b < 0) {
    const error = new RangeError("Какое-то из чисел меньше 0");
    throw error;
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Параметры a и b должны быть числами");
  }
  return a + b;
}

try {
  sumOfPositiveNumber(1, -2);
} catch (error) {
  console.log(error);
}

console.log("Usual");
