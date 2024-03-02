// length:
// javascript
// Copy code
const cars = ["Toyota", "Honda", "Ford"];
const carsLength = cars.length;

console.log(carsLength); // Output: 3
// toString:
// javascript
// Copy code
const animals = ["lion", "tiger", "elephant"];
const animalsString = animals.toString();

console.log(animalsString); // Output: 'lion,tiger,elephant'
// pop:
// javascript
// Copy code
const colors = ["red", "blue", "green"];
const removedColor = colors.pop();

console.log(removedColor); // Output: 'green'
console.log(colors); // Output: ['red', 'blue']
// push:
// javascript
// Copy code
const fruits = ["apple", "banana"];
const newFruitsLength = fruits.push("orange");

console.log(newFruitsLength); // Output: 3
console.log(fruits); // Output: ['apple', 'banana', 'orange']
// shift:
// javascript
// Copy code
const vegetables = ["carrot", "broccoli", "spinach"];
const removedVegetable = vegetables.shift();

console.log(removedVegetable); // Output: 'carrot'
console.log(vegetables); // Output: ['broccoli', 'spinach']
// unshift:
// javascript
// Copy code
const planets = ["Mars", "Venus"];
const newLengthPlanets = planets.unshift("Earth");

console.log(newLengthPlanets); // Output: 3
console.log(planets); // Output: ['Earth', 'Mars', 'Venus']
// join:
// javascript
// Copy code
const cities = ["New York", "Los Angeles", "Chicago"];
const joinedCitiesString = cities.join(", ");

console.log(joinedCitiesString); // Output: 'New York, Los Angeles, Chicago'
// delete:
// javascript
// Copy code
let countries = ["USA", "Canada", "Mexico"];
delete countries[1];

console.log(countries); // Output: ['USA', empty, 'Mexico']
// concat:
// javascript
// Copy code
const firstNames = ["John", "Jane"];
const lastNames = ["Doe", "Smith"];
const combinedNames = firstNames.concat(lastNames);

console.log(combinedNames); // Output: ['John', 'Jane', 'Doe', 'Smith']
// splice:
// javascript
// Copy code
let languages = ["JavaScript", "Python", "Ruby", "Java"];
languages.splice(1, 2, "C#", "Go");

console.log(languages); // Output: ['JavaScript', 'C#', 'Go', 'Java']
// slice:
// javascript
// Copy code
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const slicedDays = days.slice(1, 3);

console.log(slicedDays); // Output: ['Tuesday', 'Wednesday']
// sort:
// javascript
// Copy code
let fruits2 = ["strawberry", "banana", "apple"];
fruits2.sort();

console.log(fruits2); // Output: ['apple', 'banana', 'strawberry']
