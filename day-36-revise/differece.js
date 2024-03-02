function example() {
  var x = 10;
  if (true) {
    var x = 20; // This is the same variable 'x' as above, not a new one
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 20
}

function example() {
  let x = 10;
  if (true) {
    let x = 20; // This is a different variable 'x' than the one above
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 10
}

function example() {
  const x = 10;
  x = 20; // This will throw an error, because you can't reassign a constant variable
}
