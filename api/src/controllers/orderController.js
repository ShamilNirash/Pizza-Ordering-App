const { Order } = require("../database/models/order.model");

let createNewOrder = async (req, res) => {
  try {
    req.body.userId=req.user_id;
    const newOrder = new Order(req.body);
    const order = await newOrder.save();
    return res.status(200).send(order);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

module.exports = { createNewOrder };
