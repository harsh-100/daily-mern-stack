const express = require("express");
const app = express();

let port = 3002;

app.get("/", (req, res) => {
  let data = {
    name: "hjarsh",
    age: 12,
  };
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
