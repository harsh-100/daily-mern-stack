// apply loop in array

let fruits = ["mango", "apple"];

console.log(fruits);

let a;
// a = fruits[0];
// console.log(a);

// a = fruits[1];
// console.log(a);

// a = fruits[2];
// console.log(a);

for (let i = 0; i < fruits.length; i++) {
  a = fruits[i];
  if (a == "mango") a = "long " + fruits[i] + " hello";

  console.log(a);
}
