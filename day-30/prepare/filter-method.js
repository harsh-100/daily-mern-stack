// filter method in array

let arr = [3, 4, 5, 6, 7, 8, 10];

// Task -> make a new array with the numbers greater than 5
// let result = []

// arr.forEach((a)=>{
//     if(a>5){
//         result.push(a)
//     }
// })

// filter gives a array from a array after filtering with condition
let result = arr.filter((a) => {
  return a > 7;
});

console.log(result);

let result2 = arr2.filter((a) => {
  return a % 3 == 0;
});
console.log("🚀 ~ file: filter-method.js:25 ~ result2 ~ result2:", result2);
