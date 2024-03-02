function calculate(num1, num2, callback) {
  return callback(num1, num2);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

// Example usage
let result1 = calculate(10, 5, add); // result1 should be 15
let result2 = calculate(10, 5, subtract); // result2 should be 5
let result3 = calculate(10, 5, multiply); // result3 should be 50
let result4 = calculate(10, 5, divide); // result4 should be 2
