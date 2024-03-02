function extractPhoneNumbers(text) {
  const pattern = /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g;
  return text.match(pattern);
}

// Test case
const text =
  "Call me at 123-456-7890 or 555.555.5555. For emergencies, dial 911.";
const phoneNumbers = extractPhoneNumbers(text);
console.log(phoneNumbers);
