- Note : Now , be ready for amazing js assignments😉

- let's do a task

- Primitive data types
  Primitive data types include the following:

Number — e.g. 1
String — e.g. 'Hello'
Boolean — e.g. true
undefined
null

- Composite data types — Objects and Arrays
- lets take a example

let a = {
name:"joje"
}
let b = a
b.name = "hoje"

Objects
There are multiple ways to make copies of objects, especially with the new expanding and improving JavaScript specification.

- Spread operator

let b = {...a}

- Object.assign
  let b = Object.assign({}, a)

- for deep copy
  let b = JSON.parse(JSON.stringify(a))
- o Shallow copy and deep copy
  o JSON.parse & JSON.strigify.
  o Handling undefined & null.
  o Pass by value
  o Pass by reference
  o Comparision between all for loop which is one fastest?

<!-- give a read https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/ -->
