import React from "react";
import Navbar from "../src/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CartPage from "./pages/CartPage";
import Product from "./pages/Product";
import Footer from "./components/footer/Footer";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/product/:id" element={<Product />} /> */}
          <Route path="/order" element={<Orders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
