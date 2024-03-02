let myPromise = new Promise((resolve, reject) => {
  let submission = false;
  setTimeout(() => {
    if (submission) {
      resolve("Promise fullfilled");
    } else {
      reject("Not fulfiled");
    }
  }, 1000);
});

async function myAsyncFunction() {
  try {
    const result = await myPromise; // Wait for the promise to resolve
    console.log("Promise fulfilled with result:", result);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
