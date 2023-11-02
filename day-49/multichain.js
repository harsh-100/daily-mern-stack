const myPromise = new Promise((resolve, reject) => {
  resolve(10); // Resolving with the value 10
});

myPromise
  .then((result) => {
    console.log("Step 1:", result); // Output: Step 1: 10
    return result * 2; // Returning a new value to be passed to the next .then()
  })
  .then((result) => {
    console.log("Step 2:", result); // Output: Step 2: 20
    return result + 5; // Returning a new value to be passed to the next .then()
  })
  .then((result) => {
    console.log("Step 3:", result); // Output: Step 3: 25
    return result / 5; // Returning a new value to be passed to the next .then()
  })
  .then((result) => {
    console.log("Final Result:", result); // Output: Final Result: 5
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
