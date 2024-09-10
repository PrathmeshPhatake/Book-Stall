import React from "react";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses({ addToCart }) {
  return (
    <>
      <div className="min-h-screen">
        <Course addToCart={addToCart} />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
