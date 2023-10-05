// Task: Create a function to greet each person in an array

function greetPeople(names, callback) {
  names.forEach(function (name) {
    callback(name);
  });
}

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

// Example usage:
const people = ["Alice", "Bob", "Charlie", "David"];
greetPeople(people, sayHello);
