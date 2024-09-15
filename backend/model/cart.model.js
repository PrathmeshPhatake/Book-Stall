import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  userId: { type: String, required: true }, // Associate cart with user
  items: [
    {
      _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // Unique identifier for each cart item
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
