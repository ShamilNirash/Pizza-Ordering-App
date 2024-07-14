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

let getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user_id, isPayed:true });
    if (!orders) {
      return res.status(404).send({ message: "Not Found" });
    }
    return res.status(200).send({message:orders});
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

let saveOrder = async (req, res) => {
  try {
    const order = await Order.updateOne(
      { _id: req.params.orderId },
      {
        $set: {
          paymentId: req.body.paymentId,
          createTime: req.body.createTime,
          isPayed: true,
        },
      }
    );
    if (order) {
      await Order.deleteMany({ userId: req.user_id, isPayed: false });
      return res.status(200).send({ message: "Successful" });
    }
    return res.send(400).send({ message: "Error Occur" });
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
deleteAllOrder = async (req, res) => {
  try {
    const order = await Order.deleteMany({
      userId: req.user_id,
    });
    if (!order) return res.status(400).send({ message: "Error Occur" });
    return res.status(200).send({ message: "Successful" });
  } catch (err) {
    return res.send(400).send(err);
  }
};

module.exports = {
  createNewOrder,
  getOrder,
  saveOrder,
  deleteAllOrder,
  getAllOrders,
};
