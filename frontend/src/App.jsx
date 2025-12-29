import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/404";
import { Routes, Route } from "react-router-dom";
import Background from "./components/Background";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
