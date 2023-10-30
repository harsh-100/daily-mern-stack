{
  /* <script> */
}
let counter = 1;

function addInput() {
  counter++;
  const newInput = document.createElement("div");
  newInput.innerHTML = `<label for="item${counter}">Item ${counter}:</label>
                            <input type="text" id="item${counter}" name="item[]"><br><br>`;
  document.getElementById("inputContainer").appendChild(newInput);
}

function removeInput() {
  if (counter > 1) {
    const lastInput = document.getElementById(`item${counter}`);
    lastInput.parentElement.remove();
    counter--;
  }
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get all the input elements by their name attribute
  const inputs = document.getElementsByName("item[]");
  console.log(
    "🚀 ~ file: add-component.html:56 ~ handleSubmit ~ inputs:",
    inputs
  );

  // Create an array to store the values
  const values = [];

  // Iterate through the inputs and push their values into the array
  for (let i = 0; i < inputs.length; i++) {
    values.push(inputs[i].value);
  }

  // Log the values to the console (you can do something else with them here)
  console.log(values);
}
// </script>
