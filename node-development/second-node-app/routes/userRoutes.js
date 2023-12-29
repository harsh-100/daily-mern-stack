const express = require("express");
// const { getAllUsers } = require("../controller/userController");
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserData,
  deleteUserById,
} = require("../controller/userController");

const app = express();

// /user
app.get("/", getAllUsers);

app.get("/:userId", getUserById);
app.post("/addUser", addNewUser);
app.put("/:userId", updateUserData);
app.delete("/:userId", deleteUserById);

module.exports = app;
