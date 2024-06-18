const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  prizeWithSize: [
    {
      price: { type: String, required: true },
      size: { type: String, required: true },
    },
  ],
  tags: { type: [String] },
  favorite: { type: Boolean, required: true },
  stars: { type: Number, required: true },
  imgUrl: { type: String, required: true },
});

const Pizza = mongoose.model("Pizza", pizzaSchema);
module.exports = { Pizza };