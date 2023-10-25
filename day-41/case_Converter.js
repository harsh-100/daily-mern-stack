let a = "HarshAgarwalChange";
let newArr = [];

for (let i = 0; i < a.length; i++) {
  if (a[i] != a[i].toUpperCase()) {
    newArr.push(a[i]);
    console.log(newArr);
  } else {
    newArr.push("_");
    newArr.push(a[i].toLowerCase());
  }
}

console.log(newArr.join(""));

// PascalCase - > snake_case
// kebab-case -> snake_Case
// camelCase - > snake_case
