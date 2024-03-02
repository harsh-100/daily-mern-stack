let arr = ["apple", "banana", "mango"];
// traversing

function myFunc(a) {
  let newStr = `Hi ${a}`;
  console.log(newStr);
}

// arr.forEach( (a)=> {
//     let newStr = `Hi ${a}`;
//     console.log(newStr);
//   })
// callback function not need to have any name
arr.forEach(function (a) {
  let newStr = `Hi ${a}`;
  console.log(newStr);
});

// es6 version of function using the arrow notation
arr.forEach((a) => {
  let newStr = `Hi ${a}`;
  console.log(newStr);
});
