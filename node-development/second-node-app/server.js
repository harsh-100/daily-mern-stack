const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
// const UserModel = require("./model/userModel");
const app = express();

// const UserModel = require("./model/userModel");

const port = 3005;

// mongoose.connect("mongodb://127.0.0.1:27017/grass-learning");
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function callback() {
//   console.log("connected");
// });

// middleware - > MVC (model(schemas) , view(ejs) , controller (public , routes))

mongoose
  .connect("mongodb://127.0.0.1:27017/grass-node-v1")
  .then(() => {
    console.log("Connected successfully ");
  })
  .catch((error) => console.log(error));

// async function createNewUser() {
//   try {
//     const user = new UserModel({
//       name: "check2",
//       email: "harsh2@gmail.com",
//       age: 15,
//     });

//     let data = await user.save();
//   } catch (error) {
//     console.log(error);
//   }
// }

// createNewUser();
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
