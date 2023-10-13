// date

console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.E);

let obj = {
  name: "jpoker",
  age: 23,
  getDetail: function () {
    console.log("hello");
  },
};

console.log(obj.name);
// console.log(obj.getDetail())
obj.getDetail();
console.log(4 ** 2);
console.log(Math.pow(4, 3));
console.log(Math.max(2, 3, 4, 5, 6, 6, 90));

// make a function to calculate the area of circle
// area = pi*r*r

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
let result = areaOfCircle(5);
console.log(result);
let prettyResult = Math.round(result);

let upperLimit = Math.ceil(result);
let lowerLimit = Math.floor(result);

console.log(upperLimit);
console.log(lowerLimit);
console.log(prettyResult);

// make a function to calculate the hypotenuse

function calculateHypo(perp, base) {
  let perpSquare = Math.pow(perp, 2);
  let baseSquare = Math.pow(base, 2);

  return Math.sqrt(perpSquare + baseSquare);
}

console.log(calculateHypo(3, 4));
