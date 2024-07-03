const { Order } = require("../database/models/order.model");

let createNewOrder = async (req, res) => {
  try {
    req.body.userId = req.user_id;
    const newOrder = new Order(req.body);
    const order = await newOrder.save();
    return res.status(200).send(order._id);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

let getOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.orderId });
    if (order) {
      return res.status(200).send(order);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = { createNewOrder, getOrder };
