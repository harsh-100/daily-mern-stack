let btn = document.getElementById("addBtn");

let studentData = [];

let studentObj1 = { name: "ragav", age: 12, id: 1 };
let studentObj2 = { name: "soha", age: 12, id: 2 };
let studentObj3 = { name: "tiger", age: 12, id: 3 };
let studentObj4 = { name: "new", age: 12, id: 3 };

studentData.push(studentObj1);
studentData.push(studentObj2);
studentData.push(studentObj3);
studentData.push(studentObj4);

console.log(studentData);

btn.addEventListener("click", () => {
  let name1 = prompt("Enter student name");
  let age1 = prompt("Enter student age");
  let id1 = prompt("Enter student id");

  let newStudent = { name: name1, age: age1, id: id1 };

  studentData.push(newStudent);

  console.log("new data entery ", studentData);
  updateProfile();
});

function updateProfile() {
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  studentData.forEach((oneObj) => {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${oneObj.name}</td>
          <td>${oneObj.age}</td>
          <td>${oneObj.id}</td>`;
    tableBody.appendChild(tableRow);
  });
}

updateProfile();
