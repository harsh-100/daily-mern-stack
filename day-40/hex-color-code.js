const hexColorPattern = /^#[0-9A-Fa-f]{6}$/;

// condition -> # , follow by 0-9 or A-F , total length is six
const color1 = "#FF5733";
const color2 = "#12345";

console.log(hexColorPattern.test(color1)); // Output: true
console.log(hexColorPattern.test(color2)); // Output: false
