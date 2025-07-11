const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

module.exports = mongoose.model('Cart', CartSchema);