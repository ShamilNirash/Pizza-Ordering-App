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

let updateCart = async (req, res) => {
  try {
    await Cart.updateOne(
      { _id: req.params.cartId },
      {
        $set: {
          quantity: req.body.quantity,
          sizeAndPrice: req.body.sizeAndPrice,
        },
      }
    );
    return res.status(200).send({ message: "update successfully" });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

let deleteCart = async (req, res) => {
  try {
    const test = await Cart.findOneAndDelete({
      _id: req.params.cartId,
    });
    if (test) {
      return res.status(200).send({ message: "Delete Successfully" });
    }
    return res.status(400).send({ message: "Error Occur" });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
module.exports = { createNewOrder, getUserCart, updateCart, deleteCart };
