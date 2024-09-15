import Cart from "../model/cart.model.js";
import toast from "react-hot-toast";
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
    toast.success("Add to Cart")
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
// we faced problem on quantity of cart  we kept by defalult is one for all
export const handleDelete = async (req, res) => {
  const { userId } = req.body; // Retrieve userId from request body
  const { itemId } = req.params; // Retrieve itemId from URL params

  try {
    // Find the user's cart in the database
    const cart = await Cart.findOne({ userId });
    console.log("Cart before deletion:", cart);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Filter out the item with the given itemId from the cart
    const initialItemCount = cart.items.length;
    cart.items = cart.items.filter(item => item._id.toString() !== itemId);

    if (initialItemCount === cart.items.length) {
      return res.status(404).json({ message: "Item not found in the cart" });
    }

    // Ensure all remaining items have a quantity before saving
    cart.items.forEach(item => {
      if (item.quantity == null) {
        item.quantity = 1; // Set a default value if quantity is missing
      }
    });

    // Save the updated cart to the database
    const savedCart = await cart.save();
    console.log("Cart after deletion:", savedCart);

    res.json({ message: "Item deleted successfully", cart: savedCart });
  } catch (error) {
    console.error("Error saving cart:", error); // Add more error logging
    res.status(500).json({ message: "Error deleting item", error });
  }
};


