const members = [
  { name: "Vijay Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

//   loop

let arr = [];

members.forEach((oneObj) => {
  console.log(oneObj.age);
  if (oneObj.age != undefined && oneObj.age > 41 && oneObj.age < 60) {
    arr.push(oneObj);
  }
});

console.log(arr);
