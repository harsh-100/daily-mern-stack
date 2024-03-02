function changeValue(x) {
  x = 10; //3005
}

let num = 5; //2005-2009

//   pass by value
changeValue(num);

console.log(num);

function changeValue(x) {
  x.name = "john"; //2005 - 2015
}

let obj = { name: "Harsh" }; //2005 - 2015

//pass by reference
console.log(obj);

changeValue(obj);

console.log(obj);

//   number , string , boolean  -> primitive data types
// object ,array -> composite data types
