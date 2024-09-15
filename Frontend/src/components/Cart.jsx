import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import { useCart } from "../context/CartContext";

function Cart( ) {
  const { cartItems, setCartItems } = useCart(); 
  const [user] = useAuth();

  // Ensure cartItems is an array
  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array:", cartItems);
    return <p>Error: Cart items are not available.</p>;
  }

  // Redirect if not authenticated
  if (!user) {
    return <p>Please log in to view your cart.</p>;
  }

  // Save cart to the database
  const saveCart = async () => {
    console.log('Cart Items:', cartItems); // Check the content of cartItems
    try {
      const res = await axios.post('http://localhost:4001/cart/savecart', {
        userId: user._id,
        items: cartItems,
      });
      console.log(res.data);
    } catch (error) {
      console.error('Error occurred while saving cart:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (user && cartItems.length > 0) {
      saveCart();
    }
  }, [cartItems, user]);

// get cart from database of particular database 
const getCart = async () => {
    try {
      const res = await axios.get(`http://localhost:4001/cart//getcart/${user._id}`);
      setCartItems(res.data.items || []); // Update cartItems in context
    } catch (error) {
      console.error('Error fetching cart:', error.response?.data || error.message);
    } 
  };

  useEffect(() => {
    if (user) {
      getCart();
    }
  }, [user]);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);


  // delete item from cart 
  // Placeholder function for handling item deletion
  const handleDelete = async (itemId) => {
    console.log("Deleting item with ID:", itemId); // Add log for debugging

    try {
      const res = await axios.delete(`http://localhost:4001/cart/handleDelete/${itemId}`, {
        data: { userId: user._id }, // Include userId in the request body
      });

      if (res.status === 200) {
        // Update the cart items state locally after successful deletion
        setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
        console.log("Item deleted successfully");
      } else {
        console.error("Failed to delete the item. Status code:", res.status);
      }
    } catch (error) {
      console.error("Error occurred while deleting item:", error.response?.data || error.message);
    }
  };
    




  return (
    <>
    <div className="container mx-auto my-auto p-4 py-auto">
      <h1 className="text-2xl font-bold mb-4 mt-20 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Book Name</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Total</th>
                <th className="border p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.quantity || 1}</td>
                  <td className="border p-2">${item.price.toFixed(2)}</td>
                  <td className="border p-2">${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                  <td className="border p-2 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleDelete(item._id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <h2 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
      <Link to="/" className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
        Back to Home
      </Link>
      <div className="pt-8">

      <Footer/>
      </div>
    </div>
   </>
  );
}


export default Cart;