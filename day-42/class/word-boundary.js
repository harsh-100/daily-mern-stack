let str = "Behive is my book wbich of $50 and $500";

// word starting with b , no digits should be there
// m
// $number

// ba , bg

// \d -> 0-9
// g -> global
// \b -> word boundary
// [a-z] -> set of words
// ^ -> caret

// let pattern = /\$\d+/g
let pattern = /\bb[a-z]+\b/gi;

console.log(str.match(pattern));
