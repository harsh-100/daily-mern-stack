const express = require("express");
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserData,
  deleteUserById,
  userLogin,
} = require("../controller/userController");
// const UserModel = require("../model/userModel");

const router = express.Router();

// /user
router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.post("/addUser", addNewUser);
router.post("/login", userLogin);
router.put("/:userId", updateUserData);
router.delete("/:userId", deleteUserById);

module.exports = router;
