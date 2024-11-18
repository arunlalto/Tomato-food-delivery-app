import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Order from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
