import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"
import toast from "react-hot-toast";
function Cards({ item }) {
  const { addToCart } = useCart();
  const handleClick=()=>{
   addToCart(item);
   toast.success("added to cart");
  }
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="flex">
                <div 
                  className="cursor-pointer text-sm mr-2 px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
                  onClick={() => handleClick()
                  }
                >
                  Add Cart
                </div>
                {/* HIDE BUY NOW BUTTON WHEN CATEGORY IS FREE */}
                {item.category !== "free" && (
                  <div className="cursor-pointer text-sm px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                    Buy Now
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
