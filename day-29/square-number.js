// calculate sum  function

function displayResult(num) {
  console.log(`The result is ${num}`);
}

function square(a, call) {
  let result = a * a;
  call(result);
}

square(5, displayResult);
