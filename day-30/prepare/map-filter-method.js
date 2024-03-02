// map method

// forEach -> traverse at each index
// filter -> filter array and return a new array
// map -> traverse at each index and return a new array

const numbers = [65, 44, 12, 4];

let result2 = numbers.filter((a) => {
  return a > 10;
});

console.log(result2);

let result = numbers.map((a) => {
  return a * 10;
});
// console.log(numbers)
console.log(result);
