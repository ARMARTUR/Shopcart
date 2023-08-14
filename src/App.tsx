import { useState } from "react";

import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Homepage/Home/Home";
import Navbar from "./Components/Homepage/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SingUp from "./Components/Registation/SingUp/SingUp";
import Privacy from "./Components/Registation/Privacy/Privacy";
import TermsOfService from "./Components/Registation/Terms/Terms";
import Notification from "./Components/Registation/Notification/Notification";
import SingIn from "./Components/Registation/SingIn/SingIn";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/singin" element={<SingIn />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
