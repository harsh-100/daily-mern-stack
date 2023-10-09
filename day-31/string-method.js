function reverseString(str) {
  return str.split("").reverse().join("");
}

let reversed = reverseString("hello");
console.log(reversed); // Output: "olleh"

//count vowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

let vowelCount = countVowels("Hello World");
console.log(vowelCount); // Output: 3

// first letter capital

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let capitalized = capitalizeFirstLetter("hello");
console.log(capitalized); // Output: "Hello"
