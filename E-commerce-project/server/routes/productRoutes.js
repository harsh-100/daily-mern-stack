const express = require("express");
const {
  getProducts,
  addProduct,
  deleteProduct,
  getProductById,
  updateProductById,
  getProductBySellerId,
} = require("../controllers/productController");
const authCheck = require("../middlewares/auth");
const roleGuard = require("../middlewares/roleGuard");
const upload = require("../middlewares/upload");
const router = express.Router();

// localhost:5000/api/product
// s3 -> base64 ->

router.get("/seller", authCheck, getProductBySellerId);

router.get(
  "/",
  authCheck,
  //  roleGuard(["seller", "admin"]),
  getProducts
);
router.post(
  "/",
  // authCheck,
  // roleGuard("seller"),
  upload.single("image"),
  addProduct
);

// get product by id
router.get("/:productId", getProductById);

// Update a product by ID
router.put("/:productId", upload.single("image"), updateProductById);

// delete a product
router.delete(
  "/:productId",
  // authCheck, roleGuard("seller")
  deleteProduct
);

module.exports = router;
