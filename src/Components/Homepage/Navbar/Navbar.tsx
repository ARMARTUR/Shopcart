import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import Switch from "@mui/joy/Switch";
import DarkMode from "@mui/icons-material/DarkMode";
import "./Navbar.css";
import { Input } from "@mui/joy";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { useAppSelector } from "../../../Redux/Hook";
import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../../../Redux/Hook";
import { auth } from "../../../Firebase/Firebase";
import { userAuth } from "../../../Redux/AuthReducer";
import Badge from "@mui/joy/Badge";
import Typography from "@mui/joy/Typography";

function Navbar() {
  let isLoggined = useAppSelector((state) => state.auth.auth);
  console.log(isLoggined, "isloggined navbar.tsx");
  let navigate: NavigateFunction = useNavigate();
  let [categories, setCatigories] = useState<boolean>(false);
  type TypeLinkStyle = {
    textDecoration: string;
    color: string;
  };
  const linkStyles: TypeLinkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <>
      <header className="navbar">
        <div className="shopcart-logo">
          <Link to="/">
            <img
              src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
              alt=""
            ></img>
          </Link>
        </div>
        <div className="category-link" style={{ fontSize: "18px" }}>
          <div
            onClick={() => {
              setCatigories(!categories);
            }}
            className="asd"
          >
            Category
          </div>
        </div>
        <div className="deals-link">
          <Link to="/deals" style={linkStyles}>
            Deals
          </Link>
        </div>
        <div className="whats-new-link">
          <Link to="/whats" style={linkStyles}>
            What's new
          </Link>
        </div>
        <div className="delivery-link">
          <Link to="/Delievery" style={linkStyles}>
            Delivery
          </Link>
        </div>
        <div className="search-products">
          <Input
            sx={{ width: "220px", borderRadius: "20px", fontSize: "15px" }}
            placeholder="Search Product"
          />
        </div>
        <div className="account-link" style={{ position: "relative" }}>
          <span
            style={{ position: "absolute", left: "35px", top: "3px" }}
            className="account-text"
          >
            {isLoggined === null ? (
              <Link to="/singup" className="sing-up-link">
                Sing up
              </Link>
            ) : (
              <Link to="/account" className="sing-up-banner-account-text">
                Account
              </Link>
            )}
          </span>
          <PersonIcon />
        </div>
        <div className="cart-link" style={{ position: "relative" }}>
          <Link to={"/cart"}>
            <Badge badgeContent={1}>
              <Typography fontSize="xl">🛍</Typography>
            </Badge>
          </Link>
          {/* <AddShoppingCartIcon /> */}
        </div>
        <div className="togle-mode">
          <Switch
            slotProps={{
              input: { "aria-label": "Dark mode" },
              thumb: {
                children: <DarkMode />,
              },
            }}
            sx={{
              "--Switch-thumbSize": "28px",
            }}
          />
        </div>
      </header>
      <div>
        {categories === true ? (
          <div
            className="categories-dropdwon"
            style={{
              zIndex: 10,
              position: "absolute",
              top: "60px",
            }}
          >
            <div className="popular-categories">Popular Categories</div>
            <br />
            <hr className="hr" />
            <br />
            <div className="grid-categories">
              <div className="furniture containers">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png"
                  alt=""
                ></img>
                <div className="furniture name"> Furniture</div>
                <div className="aviable-itmes">items aviable</div>
              </div>
              <div className="hand-bang containers">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png"
                  alt=""
                ></img>
                <div className="hang-bang name">Hang-bang</div>
                <div></div>
                <div className="aviable-itmes">items aviable</div>
              </div>
              <div className="shoe containers">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png"
                  alt=""
                ></img>
                <div className="shoe  name">Shoe</div>
                <div className="aviable-itmes">items aviable</div>
              </div>
              <div className="head-phone containers">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png"
                  alt=""
                ></img>
                <div className="headphone  name">Headphone</div>
                <div className="aviable-itmes">items aviable</div>
              </div>

              <div className="laptop containers">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png"
                  alt=""
                ></img>
                <div className="laptop  name">Laptop</div>
                <div className="aviable-itmes">items aviable</div>
              </div>
              <div className="book containers">
                <img
                  src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png"
                  alt=""
                ></img>
                <div className="book  name">Book</div>
                <div className="aviable-itmes">items aviable</div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Navbar;
