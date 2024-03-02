function extractDates(text) {
  const pattern = /\b\d{2}\/\d{2}\/\d{4}\b/g;
  return text.match(pattern);
}

// Test case
const text = "The event will take place on 12/31/2023 and 01/15/2024";
const dates = extractDates(text);
console.log(dates);
