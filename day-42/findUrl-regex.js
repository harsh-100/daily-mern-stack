// ? is quantifier means (0 or 1)
// \S - > Not white space

//  \/\/   -> these are two forward slashes
function findUrls(text) {
  const pattern = /https?:\/\/\S+/g;
  return text.match(pattern);
}

// Test case
const text =
  "Visit our website at https://www.example.com for more information. Also, check out https://github.com/OpenAI";
const urls = findUrls(text);
console.log(urls);
