function isValidEmail(email) {
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  return emailPattern.test(email);
}

const email1 = "test@example.com";
const email2 = "invalid.email@.com";
const email3 = "missing@toplevel";

console.log(isValidEmail(email1)); // Output: true
console.log(isValidEmail(email2)); // Output: false
console.log(isValidEmail(email3)); // Output: false
