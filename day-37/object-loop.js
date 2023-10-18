// object loop

let student = {
  name: "John",
  id: 23,
  class: 5,
  prop: "value",
  //   i: 1,
};

console.log(student.class);
// console.log(student.rollNumber);
// console.log(student.name);

// console.log("name" in student);
// console.log("gae" in student);

for (let i in student) {
  //   console.log(i);
  console.log(student[i]);
  if (student[i] == 23) {
    console.log("You are young boy");
  }
}
