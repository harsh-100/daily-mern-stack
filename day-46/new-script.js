let count = 1;

function addInput() {
  count++;

  let newBlock = document.createElement("div");
  newBlock.id = `newDiv-${count}`;

  newBlock.innerHTML = `<label for="item${count}">Item ${count}:</label>
  <input type="text" id="item${count}" name="item[]" /><br /><br />`;

  document.getElementById("inputContainer").appendChild(newBlock);

  console.log("called", count);
}

console.log("count", count);
function handleSubmit(e) {
  e.preventDefault();
  let arr = [];

  let fields = document.getElementsByName("item[]");

  console.log(fields);
  for (let i = 1; i <= count; i++) {
    let valueOfInput = document.getElementById(`item${i}`).value;

    arr.push(valueOfInput);
  }
  console.log(arr);
}

function removeInput() {
  if (count > 1) {
    let lastDiv = document.getElementById(`newDiv-${count}`);

    lastDiv.parentElement.removeChild(lastDiv);
    count--;
  }
  console.log("remove", count);
}
