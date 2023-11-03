// JSON.stringify
let obj = { name: "John", age: 30 };
let jsonString = JSON.stringify(obj);

console.log(jsonString); // Output: {"name":"John","age":30}

// JSON.parse
let parsedObj = JSON.parse(jsonString);

console.log(parsedObj); // Output: { name: 'John', age: 30 }
