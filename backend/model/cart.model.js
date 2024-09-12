import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  userId: String, // User ID to associate the cart with the user
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
