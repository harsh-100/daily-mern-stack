async function fetchUserData() {
  let result = await fetch("https://jsonplaceholder.typicode.com/users");

  let finalData = await result.json();

  return finalData;
}

let btn = document.getElementById("myBtn");
let display = document.getElementById("display");

btn.addEventListener("click", async () => {
  //   console.log("Check");

  let users = await fetchUserData();
  let thirdUser = users[2];
  display.innerHTML = `User Name : ${thirdUser.name}</br> Email : ${thirdUser.email} `;
  console.log(users);
});
