// Certainly! Here are a few small examples of IIFE in JavaScript:

// 1. Basic IIFE:

(function () {
  console.log("IIFE executed!");
})();
// This IIFE simply logs a message to the console and is immediately invoked.

// 2. IIFE with Parameters:

(function (x, y) {
  console.log("Sum:", x + y);
})(5, 10);
// This IIFE takes two parameters x and y and logs their sum. It is invoked with arguments 5 and 10.

// 3. IIFE with Return Value:

var result = (function (a, b) {
  return a * b;
})(3, 4);

console.log("Result:", result);
// This IIFE multiplies two numbers and returns the result, which is then assigned to the variable result and logged.

// 4. IIFE for Creating a Private Scope:

var counterModule = (function () {
  var count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
})();

counterModule.increment();
console.log("Count:", counterModule.getCount());
