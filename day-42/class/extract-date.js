let str = "this is my birthdate 20/12/2000 and it is more than 30/10/2001";

let pattern = /\d{2}\/\d{2}\/\d{4}\b/g;

console.log(str.match(pattern));
