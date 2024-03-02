let str = "all apples are of red color";

let pattern = /\b[^a\s]+/g;
// let pattern = /^[aeiou]/g

console.log(str.match(pattern));
// console.log(pattern.test(str))
