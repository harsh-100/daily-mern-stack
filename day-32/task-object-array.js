const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

//   data drilling

// 1 . color in object
// 2 object is in array
// 3 . array is in obeject

console.log(myObj.name, " ages is ", myObj.age);

console.log(myObj.cars);
let carArray = myObj.cars;
carArray.forEach((oneObj) => {
  console.log(1);
  console.log(oneObj);
  // console.log(oneObj.name,"",oneObj.age)

  if (oneObj.name == "Ford") {
    oneObj.color = "black";
  } else if (oneObj.name == "BMW") {
    oneObj.color = "White";
  } else {
    oneObj.color = "red";
  }
});

console.log(myObj.cars);

//   console.log(myObj.cars[1].models);

// let obj = {
//     name:"harsh"
// }

// console.log(obj)
// obj.age=20
// console.log(obj)
