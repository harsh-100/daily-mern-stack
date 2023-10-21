let str = "555-555-5535";

let pattern = /^[\d]{3}\-\d{3}\-\d{4}$/g;

// ^ -> neggettes
// $ -> fixing the end of a pattern
console.log(pattern.test(str));
console.log(str.match(pattern));
