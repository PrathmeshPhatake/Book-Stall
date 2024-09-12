  import React, { useState } from "react";
  import Home from "./home/Home";
  import { Navigate, Route, Routes } from "react-router-dom";
  import Courses from "./courses/Courses";
  import Signup from "./components/Signup";
  import Contactus from "./contactUs/contactus";
  import About from "./about/about";
  import { Toaster } from "react-hot-toast";
  import { useAuth } from "./context/AuthProvider";
  import Navbar from "./components/Navbar";
  import Cart from "./components/Cart";
  function App() {
    const [authUser, setAuthUser] = useAuth();
    const [cartItem, setCartItem] = useState([]);

    const addToCart = (item) => {
      setCartItem([...cartItem, item]);
      console.log("Item added successfully:", item);
    };
    console.log(cartItem);

    console.log(authUser);

    return (
      <>
        <div className="dark:bg-slate-900 dark:text-white">
          <Navbar cartItem={cartItem} />
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Wrapping the component to pass props */}
            <Route
              path="/course"
              element={authUser ? <Courses addToCart={addToCart} /> : <Navigate to="/signup" />}
            />
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={authUser ? <Cart cartItems={cartItem}/> : <Navigate to="/signup" /> }
            />
          </Routes>
          <Toaster />
        </div>
      </>
    );
  }

  export default App;
