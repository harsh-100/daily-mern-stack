const express = require("express");
const { userCart, addCartProduct } = require("../controllers/cartController");
const router = express.Router();

// // /cart/12312333123

// router.get("/:userId", userCart);

// cart/user/234234
router.get("/user/:userId", userCart);
router.post("/user/:userId", addCartProduct);

module.exports = router;
