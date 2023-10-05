let arr = ["harhs", "rahul", "gaurav"];

// let resultArr = ["Hi harsh","Hi rahul" , 'hi gaurav']

//  [2,4,6,8,10]
let resultArr = [];
for (let i = 0; i < arr.length; i++) {
  // let result = arr[i]*2
  if (arr[i] != "rahul") {
    let newStr = "hi ";
    let result = newStr.concat(arr[i]);
    resultArr.push(result);
    console.log(resultArr);
    // break
    continue;
  }
  resultArr.push(arr[i]);
}

console.log(resultArr);
