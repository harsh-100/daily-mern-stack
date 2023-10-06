// foreach
// map
// filter
// reduce method

let arr = [3, 4, 6, 7, 34]; //20
// 0+3 = 3
// 3+4 = 7
// 7+6=13
// 13+7=20
// 20+34=54

// reduce method
let result = arr.reduce((prev, a) => {
  console.log("prev", prev);
  console.log("a", a);
  return prev + a;
}, 0);
