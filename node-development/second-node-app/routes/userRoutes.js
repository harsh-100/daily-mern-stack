const express = require("express");
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserData,
  deleteUserById,
} = require("../controller/userController");
// const UserModel = require("../model/userModel");

const router = express.Router();

// /user
router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.post("/addUser", addNewUser);
router.put("/:userId", updateUserData);
router.delete("/:userId", deleteUserById);

module.exports = router;
