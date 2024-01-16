const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mainRoute = require("./routes");

const connectDb = require("./config/db");

require("dotenv").config();

connectDb();
let port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use("/", mainRoute);

// app.use('/api/product',)

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
