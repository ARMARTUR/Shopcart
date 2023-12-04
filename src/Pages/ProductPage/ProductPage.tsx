import React, { useState } from "react";
import "./ProductPage.css";
import { useAppDispatch, useAppSelector } from "../../Redux/Hook";
import Footer from "../../Components/Footer/Footer";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { productObject } from "../../Redux/ProductReducer";
import { useParams } from "react-router-dom";
import { fetchListProduct } from "../../Redux/ProductReducer";

function ProductPage() {
  const product = useAppSelector(productObject);
  let dispatch = useAppDispatch();
  let { productId } = useParams();
  let monthPrice: number = product.price / 6;
  let [colors, setColors] = useState<string>("white");
  let [count, setCount] = useState<number>(1);

  React.useEffect(() => {
    dispatch(fetchListProduct(Number(productId)));
  }, []);

  return (
    <>
      <div className="product-page-container">
        <div className="product-page-img-container">
          <img
            src={product.images[0]}
            alt="missing gif"
            className="product-page-img"
          ></img>
        </div>

        <div className="product-page-text-container">
          <div className="product-page-title-container">
            <div className="product-page-title">{product.title}</div>
          </div>
          <div className="product-page-description-container">
            <div className="product-page-description">
              {product.description.length > 70
                ? `${product.description.slice(0, 70)}-`
                : product.description}
              <div>
                {product.description.length > 70
                  ? product.description.slice(
                      -(product.description.length - 70)
                    )
                  : null}
              </div>
            </div>
          </div>
          <div className="product-page-rating-container">
            <Stack spacing={1}>
              <Rating
                className="product-page-rating"
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
                style={{ color: "green" }}
              />
            </Stack>
            <div className="product-page-rating-quantity">{product.stock}</div>
          </div>
          <div className="product-page-price-container">
            <div className="product-page-price">{`${
              count * product.price
            }$ or ${count * Math.trunc(monthPrice)}$/month`}</div>
            <div className="product-page-price-suggest">
              Suggested payments with 6 months special financing
            </div>
          </div>
          <div className="product-page-color-container">
            <div className="product-page-color-text">Choose a color</div>

            <div
              className="product-page-color-white"
              onClick={() => {
                setColors("white");
              }}
              style={{
                border: `${
                  colors === "white" ? "2px solid black " : "transparent"
                }`,
              }}
            ></div>
            <div
              className="product-page-color-black"
              onClick={() => {
                setColors("black");
              }}
              style={{
                border: `${
                  colors === "black" ? "2px solid black " : "transparent"
                }`,
              }}
            ></div>
            <div
              className="product-page-color-orange"
              onClick={() => {
                setColors("orange");
              }}
              style={{
                border: `${
                  colors === "orange" ? "2px solid black " : "transparent"
                }`,
              }}
            ></div>
            <div
              className="product-page-color-green"
              onClick={() => {
                setColors("green");
              }}
              style={{
                border: `${
                  colors === "green" ? "2px solid black " : "transparent"
                }`,
              }}
            ></div>
            <div
              className="product-page-color-red"
              onClick={() => {
                setColors("red");
              }}
              style={{
                border: `${
                  colors === "red" ? "2px solid black " : "transparent"
                }`,
              }}
            ></div>
          </div>
          <div className="product-page-quantity-container">
            <img
              className="product-page-quanity-minus"
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
              src="https://cdn.iconscout.com/icon/free/png-512/free-minus-1439740-1214312.png?f=webp&w=256"
            />

            <div className="product-page-quanity">{count}</div>
            <img
              className="product-page-quanity-plus"
              src="https://cdn.iconscout.com/icon/free/png-512/free-plus-1768091-1502264.png?f=webp&w=256"
              onClick={() => {
                setCount(count + 1);
              }}
            />
          </div>
          <div className="product-page-buy-add-container">
            <div className="product-page-buy-button">Buy Now</div>
            <div className="product-page-add-button">Add To Cart</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "900px" }}>
        <Footer />
      </div>
    </>
  );
}

export default ProductPage;
