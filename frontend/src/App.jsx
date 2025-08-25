import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <div>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/about" element={<About />} />
        <Route to="/cart" element={<Cart />} />
        <Route to="/collection" element={<Collection />} />
        <Route to="/contact" element={<Contact />} />
        <Route to="/login" element={<Login />} />
        <Route to="/place-order" element={<PlaceOrder />} />
        <Route to="/product/:productId" element={<Product />} />
        <Route to="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
