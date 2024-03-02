// unshift method in array

const arr = [2, 3, 4, 6];

let resultOfPush = arr.push(20);

let resultOfPop = arr.pop();

console.log(resultOfPop, "resultofPop");
console.log(resultOfPush, "resultofPush");

// for adding in front

const arr2 = [2, 3, 4, 5];

console.log("before", arr2);
let resultOfUnshift = arr2.unshift(1);
console.log("resultOfUnshift", resultOfUnshift);
let resultOfShift = arr2.shift();
console.log("after", arr2);

// splice methods
// arr2.splice(2, 2, 7);
arr2.splice(2, 1, 65);

console.log(arr2);

let newArr = [400, 500, 600];
let resultOfConcat = arr2.concat(newArr);
console.log(arr2);
console.log(resultOfConcat);

// popular methods
// 1 foreach

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]); //0 ,1 ,2
}

let resultForEach = arr2.forEach((v, i) => {
  console.log("calling ", v, i);
  return 1;
});

console.log("resultForEach", resultForEach);

let resultOFMap = arr2.map((v, i) => {
  console.log(v);

  return v * 2;
});

console.log("resultOFMap", resultOFMap);

// filter , reduce ,sort
