// Task: Create a function to square a number and execute a callback with the squared result

function squareNumber(number, callback) {
  const squared = number * number;
  callback(squared);
}

function displaySquaredResult(result) {
  console.log(`The squared result is: ${result}`);
}

// Example usage:
squareNumber(5, displaySquaredResult);
