// let a = 23

// console.log(a)
// let b = a

// b +=1

// console.log(a,b)

let obj = {
  name: "John",
  age: 23,
  isMale: true,
  cars: ["toyata", "feraai"],
  email: "john@gmail.com",
  details: {
    card: 12345,
    bank: "axis",
  },
};

console.log(obj);
// let secondObj = {...obj}
// let secondObj = Object.assign({},obj)

let secondObj = JSON.parse(JSON.stringify(obj));
// console.log(secondObj.name)

// shallow copy and deep copy

secondObj.name = "Johnny";
secondObj.email = "Johnny@gmail.com";
secondObj.details.card = "567";
secondObj.details.bank = "baroda";

console.log(secondObj);
console.log(obj);
