const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  cartItems: [
    {
      name: { type: String, required: true },
      productSizeAndPrice: {
        size: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  isPayed: {
    type: Boolean,
    required: true,
    default:false
  },
  createTime:{
    type:String,
    required:true,
    default:Date().toString()
  },
  paymentId:{
    type:String,
    required:true,
    default:'00'
  }
});
const Order = mongoose.model("Order", orderSchema);
module.exports = { Order };
