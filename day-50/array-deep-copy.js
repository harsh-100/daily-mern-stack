const arr = [1, 2, 3, [20, 30, 40]];

// let newArr = [...arr]
let newArr = JSON.parse(JSON.stringify(arr));

newArr[0] = 300;
newArr[3][0] = 5000;

//

console.log(newArr);
console.log(arr);
