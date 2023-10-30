let count = 1;

function addInput() {
  count++;

  let newBlock = document.createElement("div");

  newBlock.innerHTML = `<label for="item${count}">Item ${count}:</label>
  <input type="text" id="item${count}" name="item[]" /><br /><br />`;

  document.getElementById("inputContainer").appendChild(newBlock);

  console.log("called", count);
}

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
  count--;
  console.log("remove");
}
