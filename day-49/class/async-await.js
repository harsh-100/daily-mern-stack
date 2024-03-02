let myPromise = new Promise((resolve, reject) => {
  let submission = false;
  setTimeout(() => {
    if (submission) {
      resolve(10);
    } else {
      reject("Error occured in data ");
    }
  }, 500);
});

//   let globalValue

//   myPromise
//     .then((a) => {
//       console.log("Value in then 1", a);
//       globalValue = a
//       return a
//     })
//     .then((sec)=>{
//       console.log(sec)
//       console.log("result is ",sec*2)
//       return sec*2
//     })
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((err) => {
//       console.log(err);
//     });

async function getValue() {
  try {
    let result = await myPromise;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

let res = await getValue();
console.log(res);

// console.log(globalValue)

//   async  function sumFunc(a,b){

//         return a+b
//     }

//     let result =await sumFunc(2,3)

//     console.log(result)
