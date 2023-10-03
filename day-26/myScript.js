// find multiples of 3 and 5 in an interval (50)

let userInput = Number(prompt("Enter an interval"));

let i = 1;
while (i <= userInput) {
  // console.log(i);

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz ");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
  i++;
}
