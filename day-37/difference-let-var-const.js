// var a = 10; //declare and initialize

// let b = 20;

// const c = 30;

// let arr = [1, 2, 3, 4];

// diffe in var and let

//

function printMessage() {
  // body of the function
  //   var is a function scoped
  var a = 10;
  if (true) {
    var a = 20; //update the old variable
    console.log("inner", a);
  }
  console.log("outer", a);
}

function printMessageLet() {
  // body of the function

  //   let is a block scoped
  let a = 10;
  if (true) {
    let a = 20; //new variable
    console.log("inner", a);
  }
  console.log("outer", a);
}

printMessage();
printMessageLet();
// printMessage();
// printMessage();
// printMessage();
