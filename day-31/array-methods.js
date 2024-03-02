function findMax(arr) {
  return Math.max(...arr);
}

let max = findMax([3, 7, 2, 9, 1]);
console.log(max); // Output: 9

// filter methods even number
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

let evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(evenNumbers); // Output: [2, 4, 6]

// concate array
function concatArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let concatenated = concatArrays([1, 2, 3], [4, 5, 6]);
console.log(concatenated); // Output: [1, 2, 3, 4, 5, 6]

// make unique element
function findUnique(arr) {
  return [...new Set(arr)];
}

let uniqueElements = findUnique([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueElements); // Output: [1, 2, 3, 4, 5]

// sort the array
function sortArray(arr) {
  return arr.slice().sort();
}

let sorted = sortArray(["apple", "banana", "cherry"]);
console.log(sorted); // Output: ["apple", "banana", "cherry"]
