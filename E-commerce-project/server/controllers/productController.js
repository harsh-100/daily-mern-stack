const ProductModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    console.log("Testing api cehck");
    const products = await ProductModel.find();
    // console.log("🚀 ~ getProducts ~ products:", products);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send("Internal server error ");
  }
};

const addProduct = async (req, res) => {
  try {
    // console.log("check the image ", req.file.filename);
    // console.log("THis is check", req.body);
    let data = JSON.parse(req.body.data);

    console.log("check 2", req.body.data);
    // let data = JSON.parse(req.body);
    console.log("🚀 ~ addProduct ~ data:", data);

    let newProductObj = { ...data, imageUrl: req.file.filename };
    const newProducts = await ProductModel.create(newProductObj);

    res.json(newProducts);
  } catch (error) {
    console.log("Error ", error);
    res.status(404).send("Internal server error ");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    let product = await ProductModel.findByIdAndDelete(productId);
    if (!product) {
      res.json({ Error: "Please provide correct id" });
      return;
    }

    res.json(product);
  } catch (error) {
    console.log("Error ", error);
    res.status(404).send("Internal server error ");
  }
};

// Get a single product by ID

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update a product by ID

// Update a product by ID
const updateProductById = async (req, res) => {
  try {
    console.log("data>>>", req.body);
    let origianlData = JSON.parse(req.body.data);
    let newData;
    if (req.file) {
      newData = { ...origianlData, imageUrl: req.file.filename };
    } else {
      newData = { ...origianlData };
    }

    const product = await ProductModel.findByIdAndUpdate(
      req.params.productId,
      newData,
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  getProductById,
  updateProductById,
};
