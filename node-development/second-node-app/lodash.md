const \_ = require('lodash');

// Example use of Lodash functions
const numbers = [1, 2, 3, 4, 5];

const sum = _.sum(numbers);
const squaredNumbers = _.map(numbers, n => n \* n);

console.log('Sum:', sum);
console.log('Squared Numbers:', squaredNumbers);
