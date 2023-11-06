// function changeValue(x) {
//     console.log(x)
//     x = 10;
//     console.log(x)

//   }

let num = 5;
//   4byte -> 4*8 = 32

// //   pass by value
//   changeValue(num);

//   console.log(num);

function changeProperty(obj) {
  obj.name = "johnny";
}

function secondFunc(obj) {
  console.log(obj);
}

let myObj = { name: "harsh" };

// pass by reference
changeProperty(myObj);

secondFunc(myObj);

console.log(myObj);
