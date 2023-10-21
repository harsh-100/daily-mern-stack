// regex value  or regular expression

// email -> 'test@gmail.com'
// email -> 'test@gmail.i'
// email -> 'test$-@gmail.i'

// password -> harsh@123

let str =
  "this is my name and i have name a bag worth of $40 AND $500 and $3000 ";

// $number

// console.log(str.includes("$50"))
// let pattern = /name/g

// 0-9 -> \d
// flag -> g means global
//  + means -> atleast one
//  * means -> optional (0 to infinite)

let pattern = /\$\d+/g;

console.log(str.match(pattern));
