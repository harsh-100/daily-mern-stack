const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"], color: "red" },
    { name: "BMW", models: ["320", "X3", "X5"], color: "red" },
    { name: "Fiat", models: ["500", "Panda"], color: "red" },
  ],
};

console.log(myObj.cars[1].models);
