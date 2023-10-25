// Example 1: Using \w
// const pattern = /\w+/g;
// const text = "Hello World! This is an example.";

// const matches = text.match(pattern);
// console.log(matches); // Output: [ 'Hello', 'World', 'This', 'is', 'an', 'example' ]

// Example 2: Using \W
// const pattern = /\W+/g;
// const text = "Hello World! This is an example.";

// const matches = text.match(pattern);
// console.log(matches); // Output: [ '', ' ', '! ', ' ', ' ', ' ', '.' ]

// Example 3: Using \w and \W Together
const pattern = /\w+\W+\w+/g;
const text = "Hello World! This is an example.";

const matches = text.match(pattern);
console.log(matches); // Output: [ 'Hello World', 'This is', 'an example' ]
