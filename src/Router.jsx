import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./componant/CartPage";
import Home from "./componant/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
