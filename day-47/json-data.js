// JSON Data:
// Definition: JSON stands for JavaScript Object Notation.
//  It is a lightweight data interchange format that is easy for
// humans to read and write and easy for machines to parse and generate.

// Example: Here's an example of JSON data representing a person:

let jsonData = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Convert it to a JSON string
let jsonString = JSON.stringify(jsonData);

console.log("Original Data:");
console.log(jsonData);
console.log("\nJSON String:");
console.log(jsonString);

// other exmaple

// Now let's pretend we received this JSON string from somewhere
let receivedString = '{"name":"Jane Smith","age":25,"city":"Los Angeles"}';

// Convert it back to a JavaScript object
let receivedData = JSON.parse(receivedString);

console.log("\nReceived JSON String:");
console.log(receivedString);
console.log("\nConverted Data:");
console.log(receivedData);
