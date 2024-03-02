let str =
  "my webpage has a url of http://harsh.com and it is live as https://harsh.dev see it";

// let pattern = /https?:\/\/[a-z]+.[a-z]+/g;
let pattern = /https?:\/\/\S+/g;

// ? -> quantifier (0 or 1)
// + (1 or more ), *  (0 or more )
console.log(str.match(pattern));
