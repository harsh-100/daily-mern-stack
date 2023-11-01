function asynchronousTask() {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2 (async)");
  }, 2000); // Simulating a delay of 2 seconds
  console.log("Task 3");
}

console.log("Start");
asynchronousTask();
console.log("End");
