const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const date1 = "2023-10-21";
const date2 = "2023-10-21T14:30:00";

console.log(datePattern.test(date1)); // Output: true
console.log(datePattern.test(date2)); // Output: false
