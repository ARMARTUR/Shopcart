import { useState } from "react";

import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Homepage/Home/Home";
import Navbar from "./Components/Homepage/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
