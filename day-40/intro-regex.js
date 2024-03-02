// Define a string
const myString = "Hello, I love JavaScript!";

// Define a regular expression pattern to match words
const pattern = /\w+/g;

// Use the match method to find all words in the string
const matches = myString.match(pattern);

// Print the matches
console.log(matches); // Output: [ 'Hello', 'I', 'love', 'JavaScript' ]
