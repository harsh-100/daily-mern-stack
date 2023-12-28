const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3005;

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Joker" },
  { id: 3, name: "Rohan" },
  { id: 4, name: "Sohan" },
  { id: 5, name: "Mohan" },
];

// parse application/json
app.use(bodyParser.json());

// middleware

app.get("/user", (req, res) => {
  res.send(users);
});

app.get("/user/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);

  let userData = users.find((eachObj) => eachObj.id == userId);
  res.send(userData);
  if (userData) {
    res.status(200).send(userData);
  } else {
    res.status(404).send("Please Provide correct user Id");
  }
});

app.post("/addUser", (req, res) => {
  console.log(req.body);
  res.send("Testing post route");
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
