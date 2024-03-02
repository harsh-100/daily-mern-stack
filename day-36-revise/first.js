var a = 10; //number
var str = "jzskjhvdajf34"; //string
var bool = true; //boolean

var fruits = ["apple", "papaya", "grapes", "mango"];
var anything = [1, 2, "apple", [1, 2], true];

var obj = {
  // key:value
  rollNumber: 10,
  name: "joker",
  lastName: "sharma",
  age: 23,
};

var key = "lastName";

console.log("obj name>>>", obj[key]); //dynamic
console.log("obj name>>>", obj.key); //dynamic

// console.log("anything>>>>", anything[3][1]);
// console.log("anything>>>>", typeof anything[4]);

console.log(typeof a);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof fruits);
console.log(fruits.length);

console.log(fruits[fruits.length - 1]);
// console.log(fruits);
