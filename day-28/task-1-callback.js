// Task: Calculate the sum of two numbers and execute a callback with the result
function calculateSum(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

function displayResult(result) {
  console.log(`The result is: ${result}`);
}

// Example usage:
calculateSum(5, 7, displayResult);
