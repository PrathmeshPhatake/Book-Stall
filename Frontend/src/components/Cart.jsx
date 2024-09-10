import React from "react";
import { Link } from "react-router-dom";

function Cart({cartItems}) {
  // Ensure cartItems is an array
  if (!Array.isArray(cartItems)) {
    console.error("cartItems is not an array:", cartItems);
    return <p>Error: Cart items are not available.</p>;
  }

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="container mx-auto p-4 py-auto">
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
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.quantity || 1}</td>
                  <td className="border p-2">${item.price.toFixed(2)}</td>
                  <td className="border p-2">${(item.price * (item.quantity || 1)).toFixed(2)}</td>
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
    </div>
  );
}

export default Cart;
