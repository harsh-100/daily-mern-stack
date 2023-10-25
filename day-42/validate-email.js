function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return pattern.test(email);
}

// Test cases
const emails = [
  "john.doe@example.com",
  "jane_doe@gmail.com",
  "invalid.email",
  "hello@com",
];
emails.forEach((email) => {
  console.log(`${email}: ${validateEmail(email) ? "Valid" : "Invalid"}`);
});
