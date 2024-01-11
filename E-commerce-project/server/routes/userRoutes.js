const express = require("express");
const {
  getAllUser,
  addUser,
  loginUser,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getAllUser);
router.post("/", addUser);
router.post("/login", loginUser);

module.exports = router;
