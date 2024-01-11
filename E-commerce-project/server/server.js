const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const connectDb = require("./config/db");

require("dotenv").config();

connectDb();
let port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
