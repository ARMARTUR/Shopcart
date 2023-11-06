import React from "react";

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
import { useAppSelector } from "./Redux/Hook";
import Account from "./Components/Account/Account";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { auth } from "./Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./Redux/Hook";
import { userAuth } from "./Redux/AuthReducer";
import Cart from "./Components/CartPage/Cart";
import { db } from "./Firebase/Firebase";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
function App() {
  let logginedUser = useAppSelector((state) => state.auth.auth);
  let dispatch = useAppDispatch();
  React.useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      dispatch(userAuth(u?.email));
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/cart" element={<Cart />} />
        {logginedUser === null ? (
          <>
            <Route path="/singin" element={<SingIn />} />
            <Route path="/singup" element={<SingUp />} />
          </>
        ) : (
          <Route path="/account" element={<Account />} />
        )}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
