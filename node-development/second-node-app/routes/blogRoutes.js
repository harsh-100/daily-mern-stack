const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();

// /blog
router.get("/", blogController);

module.exports = router;
