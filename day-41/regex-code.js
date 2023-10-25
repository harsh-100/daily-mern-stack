// lets play with regex (regular expression )

let str =
  "this is my name and i have name a bag worth of $ $40AND $568 and $8000 $40 ";

//   $number
// \d - > 0-9
//  + -> 1 or more
// * -> 0 or more
//  whiteSpace is also a character
// \W - > white space

let pattern = /\$[0-5]+\W/g;

let result = str.match(pattern);

console.log(result);

let str2 = "Apples are amazing! let's have a look";

// let patter2 = /[a,A][a-z]+/g
let patter2 = /[a]\w+/gi;

console.log(str2.match(patter2));

// \W - > opposite of \w
// \w -> [a-zA-Z0-9_]

let str3 = "the digits are 234 and 23423";
let pattern3 = /\d{3}\s/g;

console.log(str3.match(pattern3));
