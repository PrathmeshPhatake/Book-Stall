import Cart from "../model/cart.model.js";

// Save or update the cart
export const saveCart = async (req, res) => {
  const { userId, items } = req.body;

  try {
    // Upsert (update if exists, insert if not)
    await Cart.findOneAndUpdate(
      { userId },
      { items },
      { upsert: true }
    );
    res.status(200).json({ message: "Cart saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving cart", error });
  }
};

// Get the cart for a user
export const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};
