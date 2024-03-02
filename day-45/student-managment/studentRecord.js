console.log("Succes 🐸");

let studentTable = document.getElementById("studentRecord");
const student = [];

const firstEntry = { name: "joker", age: 12, id: 13 };
const secondEntry = { name: "ravan", age: 12, id: 13 };

student.push(firstEntry);
student.push(secondEntry);

console.log(student);

let button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("hellow");
  let name = prompt("Enter student name");
  let age = prompt("Enter student age");
  let id = prompt("Enter student id");

  student.push({ name, age, id });
  updateProfile();
});

function updateProfile() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  function caller(obj) {
    let row = document.createElement("tr");

    row.innerHTML = `   <td>${obj.name}</td>    <td>${obj.age}</td>    <td>${obj.id}</td>    `;

    tbody.appendChild(row);
  }

  student.forEach(caller);
}

updateProfile();
