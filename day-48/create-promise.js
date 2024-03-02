const myPromise = new Promise((resolve, reject) => {
  const successful = false; // Simulating a successful operation

  setTimeout(() => {
    if (successful) {
      resolve("Data fetched successfully"); // Resolve with a message
    } else {
      reject("Failed to fetch data"); // Reject with an error
    }
  }, 2000); // Simulating a delay of 2 seconds
});

// console.log(myPromise);

// myPromise
//   .then((message) => {
//     console.log(message); // This will be executed if the promise is resolved
//   })
//   .catch((error) => {
//     console.log(error); // This will be executed if the promise is rejected
//   });
