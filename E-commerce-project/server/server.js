const express = require("express");
const app = express();

require("dotenv").config();

let port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
