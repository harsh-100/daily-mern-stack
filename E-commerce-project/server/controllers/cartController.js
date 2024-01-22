const Cart = require("../models/cartModel");

const userCart = async (req, res) => {
  try {
    const userId = req.params.userId;

    let cartData = await Cart.findOne({ userId: userId }).populate(
      "items.productId"
    );
    console.log("🚀 ~ userCart ~ cartData:", cartData);

    if (!cartData) {
      return res.send("Cart Does not found ");
    }
    res.json(cartData);
  } catch (error) {
    console.log("🚀 ~ userCart ~ error:", error);
    res.send(error);
  }
};

// const addCartProduct = async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     const data = req.body;
//     let cart = await Cart.find({ userId: userId });
//     let existingCart;
//     if (cart.length <= 0) {
//       existingCart = new Cart({ items: [], userId: userId });
//     }

//     if (cart.length > 0) {
//       console.log("My vcalue", cart);
//       let product = cart[0].items.find(
//         (itemObj) => itemObj.productId == data.productId
//       );

//       product.quantity += data.quantity;

//       cart[0].items.push(product);
//       let newData = await cart[0].save();

//       return res.json(newData);
//     }
//     let newProduct = { productId: data.productId, quantity: data.quantity };

//     existingCart.items.push(newProduct);

//     let newCart = await existingCart.save();

//     res.send(newCart);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
// };
const addCartProduct = async (req, res) => {
  const userId = req.params.userId;
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const existingItem = cart.items.find((item) =>
      item.productId.equals(productId)
    );
    console.log("🚀 ~ addCartProduct ~ existingItem:", existingItem);

    if (existingItem) {
      existingItem.quantity = existingItem.quantity + quantity || 1;
    } else {
      console.log("The else part");
      cart.items.push({ productId, quantity: quantity || 1 });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    // const userId = req.params.userId;

    const { userId, productId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.send("Cart Does not found ");
    }

    let result = cart.items.filter(
      (eachProduct) => eachProduct.productId != productId
    );
    cart.items = result;
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.send(error);
  }
};

// controllers/cartController.js
const updateCartItem = async (req, res) => {
  const { userId, productId } = req.params;
  const { quantityToRemove } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // Find the item in the cart
    const cartItem = cart.items.find((item) =>
      item.productId.equals(productId)
    );

    if (!cartItem) {
      return res.status(404).json({ error: "Item not found in the cart" });
    }

    // Decrement the quantity or remove the item if quantityToRemove is greater than or equal to the current quantity
    if (quantityToRemove && quantityToRemove < cartItem.quantity) {
      cartItem.quantity -= quantityToRemove;
    } else {
      // If quantityToRemove is not specified or greater/equal to current quantity, remove the entire item
      cart.items = cart.items.filter(
        (item) => !item.productId.equals(productId)
      );
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  userCart,
  addCartProduct,
  removeItemFromCart,
  updateCartItem,
};
