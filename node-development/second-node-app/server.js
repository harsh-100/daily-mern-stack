const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const port = 3005;

// middleware
app.use(bodyParser.json());

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
