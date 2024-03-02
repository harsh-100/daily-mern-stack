// Import required modules
const express = require("express");

// Initialize Express
const app = express();

// Dummy route for testing
app.get("/", (req, res) => {
  let data = req.query;
  console.log("🚀 ~ file: server.js:10 ~ app.get ~ data:", data);
  res.send("Hello, this  backend!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
