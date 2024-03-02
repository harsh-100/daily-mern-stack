// function synchronousTask(){
//     console.log("Task 1 ")
//     console.log("Task 2 ")
//     console.log("Task 3 ")
// }

function asynchronousTask() {
  console.log("Task 1");

  setTimeout(() => {
    console.log("Task 2");
  }, 1000);
  console.log("Task 3");
}

console.log("Start");
asynchronousTask();
console.log("End");
