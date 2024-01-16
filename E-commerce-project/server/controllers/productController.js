const ProductModel = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).send("Internal server error ");
  }
};

const addProduct = async (req, res) => {
  try {
    const newProducts = await ProductModel.create(req.body);

    res.json(newProducts);
  } catch (error) {
    res.status(404).send("Internal server error ");
  }
};

module.exports = {
  getProducts,
  addProduct,
};
