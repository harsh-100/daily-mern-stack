- Exercise of Js object (1 question)

- use of "this" in object
  https://www.w3schools.com/js/js_objects.asp

  let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
  return this.firstName + " " + this.lastName;
  }
  };

- Accessing Properties:
  -\* how to create an empty object (using const person = new Object();)
- Adding and Modifying Properties:
- Object Methods:
  console.log(person.fullName()); // Output: John Doe

- Nested Objects:
  let student = {
  name: {
  first: "Jane",
  last: "Doe"
  },
  age: 25,
  grades: {
  math: 90,
  science: 85,
  history: 95
  }
  };

- Iterating Over Object Properties:

- Object Methods and this:

let person = {
name: "John",
age: 30,
sayHello: function() {
return `Hello, my name is ${this.name}. I am ${this.age} years old.`;
}
};

console.log(person.sayHello()); /

- Object Destructuring:

let { firstName, lastName } = person;
console.log(firstName, lastName); // Output: John Doe

- Object Spread Operator:

let carDetails = {
color: "Blue",
transmission: "Automatic"
};

let fullCarDetails = { ...myCar, ...carDetails };

o JS Date -> https://www.w3schools.com/jsref/jsref_obj_date.asp
o New Date()
o All date methods
o .getMonth
o .getDate()
o .getTime()
