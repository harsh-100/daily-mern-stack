let myPromise = new Promise((resolve, reject) => {
  let submission = false;
  setTimeout(() => {
    if (submission) {
      var user = {
        name: "harsh",
        age: 23,
      };
      resolve(user);
    } else {
      reject("Error occured in data ");
    }
  }, 500);
});

// console.log(myPromise);

myPromise
  .then((a) => {
    console.log("Value in then 1", a);
  })
  .catch((err) => {
    console.log(err);
  });
