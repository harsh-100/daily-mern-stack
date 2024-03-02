const express = require("express");
const {
  getAllUser,
  addUser,
  loginUser,
  updateUser,
} = require("../controllers/userController");
const authCheck = require("../middlewares/auth");
const roleGuard = require("../middlewares/roleGuard");
const router = express.Router();

router.get("/", authCheck, roleGuard, getAllUser);
router.post("/", addUser);
router.post("/login", loginUser);

// allow only admins
router.put("/:userId", authCheck, roleGuard("admin"), updateUser);

module.exports = router;
