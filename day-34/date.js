// Date in js

const date = new Date();

let std = {
  name: "harsh",
  profile: function () {
    console.log("hello");
  },
};

std.profile();
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());

// var months = ["January", "February", "March", "April", "May", "June", "July",
//          "August", "September", "October", "November", "December"];

let monthNumber = date.getMonth();

// const month = date.toLocaleString('default', { month: 'long' });
// console.log(month)
