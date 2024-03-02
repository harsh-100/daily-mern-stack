const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mainRoute = require("./routes");
const cors = require("cors");
const connectDb = require("./config/db");
const morgan = require("morgan");
app.use(cors());
app.use(morgan("dev"));

require("dotenv").config();
connectDb();
let port = process.env.PORT || 5001;

app.use(bodyParser.json());

// app.get("/product/seller", (req, res) => {
//   res.send("Main file");
// });
app.use("/", mainRoute);

// app.use('/api/product',)

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
