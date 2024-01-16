const express = require("express");
const { getProducts, addProduct } = require("../controllers/productController");
const authCheck = require("../middlewares/auth");
const roleGuard = require("../middlewares/roleGuard");
const upload = require("../middlewares/upload");
const router = express.Router();

// localhost:5000/api/product
// s3 -> base64 ->
router.get("/", authCheck, roleGuard(["seller"]), getProducts);
router.post(
  "/",
  //   authCheck,
  //   roleGuard("seller"),
  upload.single("image"),
  addProduct
);

module.exports = router;
