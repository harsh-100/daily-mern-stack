const form = document.getElementById("myForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const age = document.querySelector("#age").value;
  const gender =
    document.querySelector('input[name="gender"]:checked')?.value ||
    "Not specified";
  const subscribe = document.getElementById("subscribe").checked
    ? "Subscribed"
    : "Not subscribed";

  result.innerHTML = `Name: ${name}<br>Email: ${email}<br>Age: ${age}<br>Gender: ${gender}<br>Subscription: ${subscribe}`;
});
