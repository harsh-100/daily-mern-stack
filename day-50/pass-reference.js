function changeProperty(obj) {
  obj.name = "Jane";
}

let person = { name: "John" };
changeProperty(person);

console.log(person); // Output: { name: 'Jane' }
