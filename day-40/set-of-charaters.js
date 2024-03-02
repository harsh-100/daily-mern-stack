// regex value  or regular expression

// email -> 'test@gmail.com'
// email -> 'test@gmail.i'
// email -> 'test$-@gmail.i'

// password -> harsh@123

let str =
  "this is my name and i have Name234 a work234 bag worth of 40 AND $500 and $3000 ";

// let pattern = /\$\d+/g
// i -> flag is for case insensitive

// let pattern = /[a-zA-Z]+\d+/gi

// a ,A
let pattern = /[a-zA-Z]+\d+/gi;
// let pattern  = /[a-zA-z]{3,}\d+/g

console.log(str.match(pattern));
