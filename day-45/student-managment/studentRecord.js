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
  let name1 = prompt("Enter student name");
  let age1 = prompt("Enter student age");
  let id1 = prompt("Enter student id");

  student.push({ name: name1, age: age1, id: id1 });
  updateProfile();

  console.log(name1);
  console.log(age1);
  console.log(id1);
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
