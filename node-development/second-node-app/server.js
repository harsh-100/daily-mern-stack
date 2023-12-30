const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const app = express();

const port = 3005;

// middleware - > MVC (model(schemas) , view(ejs) , controller (public , routes))

app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
