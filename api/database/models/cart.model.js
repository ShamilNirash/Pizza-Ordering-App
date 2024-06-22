const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  pizza_id: {
    type: String,
    required: true,
  },
  pizza_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  sizeAndPrice: {
    size: { type: String, required: true },
    price: {
      type: Number,
      required: true,
    },
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = { Cart };
