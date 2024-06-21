const { Cart } = require("../database/models/cart.model");

let createNewOrder = async (req, res) => {
  try {
    req.body.user_id = req.user_id;
    const newCart = new Cart(req.body);
    await newCart.save();
    return res.status(200).send(newCart);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

let getUserCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user_id: req.user_id });
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { createNewOrder, getUserCart };
