// arithmetic operator

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3); //MATH.POW
console.log(3 % 3); //modulus operator (remainder)
console.log(2 / 2);

console.log(3 < 4);
// comparison operator

// make a function to check if a number is even

function checkEvenAndDivibleByTen(num) {
  if (num % 2 == 0) {
    if (num % 10 == 0) {
      return true;
    }
    return false;
  } else {
    return false;
  }
}

let result = checkEvenAndDivibleByTen(10);
console.log(result);

// arithmetic operator

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3); //MATH.POW
console.log(3 % 3); //modulus operator (remainder)
console.log(2 / 2);

console.log(3 < 4);
// comparison operator

// make a function to check if a number is even

function checkEvenAndDivibleByTen(num) {
  if (num % 2 == 0 && num % 10 == 0) {
    return true;
  } else {
    return false;
  }
}

let result2 = checkEvenAndDivibleByTen(12);
console.log(result2);
