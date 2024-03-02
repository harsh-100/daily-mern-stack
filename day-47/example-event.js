function sayHello() {
  alert("Hello!");
}

function showValue() {
  var inputValue = document.getElementById("myInput").value;
  alert("You typed: " + inputValue);
}

function showKeyUp(event) {
  alert("Key released: " + event.key);
}

function showKeyDown(event) {
  alert("Key pressed: " + event.key);
}

function showSelection() {
  var selectedText = window.getSelection().toString();
  alert("You selected: " + selectedText);
}
