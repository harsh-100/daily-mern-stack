// Shallow Copy
let originalArray = [1, 2, [3, 4]];
let shallowCopy = originalArray.slice();

shallowCopy[2][0] = 100;
console.log(originalArray); // Output: [1, 2, [100, 4]]

// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(originalArray));

deepCopy[2][0] = 200;
console.log(originalArray); // Output: [1, 2, [100, 4]]
