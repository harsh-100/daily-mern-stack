let myTask = new Promise((resolve, reject) => {
  let submission = false;
  setTimeout(() => {
    if (submission) {
      resolve("Promise fullfilled");
    } else {
      reject("Not fulfiled");
    }
  }, 1000);
});

// console.log(myTask);
myTask
  .then((a) => {
    console.log("check", a);
  })
  .catch((err) => {
    console.error(err);
  });
