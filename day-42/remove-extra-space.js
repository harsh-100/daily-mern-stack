function removeExtraSpaces(sentence) {
  const pattern = /\s+/g;
  return sentence.replace(pattern, " ");
}

// Test case
const sentence =
  "   This   is   an   example   sentence   with   extra   spaces.   ";
const result = removeExtraSpaces(sentence);
console.log(result);
