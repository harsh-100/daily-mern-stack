function printMessage() {
  console.log("happy diwali");
}
// while loop
let a = 0; //intilization

while (a < 5) {
  //condition
  printMessage();
  console.log(a);
  a = a + 1; //update
}

// // do-while
do {
  printMessage();
  console.log(a);
  a = a + 1; //update
} while (a > 5);

// for loop

for (let i = 0; i < 5; i = i + 1) {
  printMessage();
}
