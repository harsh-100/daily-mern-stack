// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Do-While Loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// For-In Loop (for objects)
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}

// For-Of Loop (for arrays)
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}
