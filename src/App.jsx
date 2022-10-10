import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
