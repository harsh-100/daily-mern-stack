// Task 1: Managing a Library
// Task Description:

// You are tasked with creating a program to manage a library. Each book has the following properties:

// Title
// Author
// Genre
// Create an object that represents a library. The library should have the following functionalities:

// Add a book to the library.
// Remove a book from the library.
// List all the books in the library.

let library = {
  books: [],
  addBook: function (title, author, genre) {
    let book = { title, author, genre };
    this.books.push(book);
  },
  removeBook: function (title) {
    this.books = this.books.filter((book) => book.title !== title);
  },
  listBooks: function () {
    this.books.forEach((book) => {
      console.log(
        `Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`
      );
    });
  },
};

// Adding books
library.addBook("Book 1", "Author 1", "Fiction");
library.addBook("Book 2", "Author 2", "Non-fiction");

// Listing books
console.log("All Books:");
library.listBooks();

// Removing a book
library.removeBook("Book 1");

// Listing books after removal
console.log("\nBooks after removal:");
library.listBooks();
// Task 2: Managing a Classroom
// Task Description:

// You are managing a classroom with multiple students. Each student has the following properties:

// Name
// Age
// Subjects (an array of subjects they are enrolled in)
// Create an object that represents the classroom. The classroom should have the following functionalities:

// Add a student to the class.
// Remove a student from the class.
// List all the students in the class.
// Solution Code:

// javascript
// Copy code
let classroom = {
  students: [],
  addStudent: function (name, age, subjects) {
    let student = { name, age, subjects };
    this.students.push(student);
  },
  removeStudent: function (name) {
    this.students = this.students.filter((student) => student.name !== name);
  },
  listStudents: function () {
    this.students.forEach((student) => {
      console.log(
        `Name: ${student.name}, Age: ${
          student.age
        }, Subjects: ${student.subjects.join(", ")}`
      );
    });
  },
};

// Adding students
classroom.addStudent("Alice", 12, ["Math", "Science"]);
classroom.addStudent("Bob", 11, ["English", "History"]);

// Listing students
console.log("All Students:");
classroom.listStudents();

// Removing a student
classroom.removeStudent("Alice");

// Listing students after removal
console.log("\nStudents after removal:");
classroom.listStudents();
// These tasks involve creating objects and manipulating them using methods. The solutions provided demonstrate how to manage a library and a classroom, but you can adapt the concepts to other scenarios as well.
