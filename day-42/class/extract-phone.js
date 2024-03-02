let str = ` the phone number is 555-555-5555 and mine is 55555555555 and
 your is 555 555 5555  and something is 555.555.5555`;

let pattern = /\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/g;

console.log(str.match(pattern));
