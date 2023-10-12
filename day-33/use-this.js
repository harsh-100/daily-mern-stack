let student = {
  name: "John",
  rollNumber: 22,
  class: 3,
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.rollNumber;
  },
  getClass: function () {
    return this.class;
  },
};

// student.name

let n = student.getName();
let c = student.getClass();
console.log(n);
console.log(c);
