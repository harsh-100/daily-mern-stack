function generateRandom(range) {
  let randNum = Math.random() * range;
  let prettyNum = Math.floor(randNum);
  return prettyNum;
}

generateRandom(10);
console.log(generateRandom(10));
console.log(generateRandom(10));
console.log(generateRandom(1000));
console.log(generateRandom(1000));
console.log(generateRandom(10));
console.log(generateRandom(10));
console.log(generateRandom(10));
console.log(generateRandom(10));
