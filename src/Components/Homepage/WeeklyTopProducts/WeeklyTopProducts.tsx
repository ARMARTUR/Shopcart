import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../../Redux/CategoriesReducer";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hook";
import { TypeFetchResult } from "../../../Redux/SearchProductReducer";
import "./WeeklyTopProducts.css";
import { fetchProductByCategory } from "../../../Redux/SearchProductReducer";
import { Product } from "../../../Redux/ProductsReducer";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
function WeeklyTopProducts() {
  const dispatch = useAppDispatch();

  let categories: string[] = useAppSelector(
    (state) => state.categories.categories
  );
  // let [category, setCategory] = useState<string>("");
  let categoryProducts: TypeFetchResult = useAppSelector(
    (state) => state.searchProduct.products
  );
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  useEffect(() => {
    dispatch(fetchProductByCategory("smartphones"));
  }, []);
  function fetchChangedCategory(category: string) {
    dispatch(fetchProductByCategory(category));
  }

  return (
    <div className="weekly-top-products-container">
      <div className="weekly-top-product-text">Weekly Top Products For You</div>

      <div className="weekly-top-products-categories-container">
        {categories.slice(0, 10).map((category: string) => {
          return (
            <div
              className={`weekly-top-products-categories-items color `}
              onClick={() => {
                fetchChangedCategory(category);
              }}
              style={{ background: "red" }}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="weekly-top-products-item-container">
        {categoryProducts.products
          .slice(1, categoryProducts.products.length)
          .map((category: Product) => {
            return (
              <div className="weekly-top-products-item">
                <div className="weekly-top-products-items-favorite-container">
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </div>
                <div className="weekly-top-products-items-image-container">
                  <img
                    src={category.images[0]}
                    className="weekly-top-products-items-image"
                  ></img>
                </div>
                <div className="weekly-top-products-items-description-container">
                  <div className="weekly-top-products-items-description-title-price-container">
                    <div className="weekly-top-products-items-title">
                      {category.title}
                    </div>

                    <div className="weekly-top-products-items-price">
                      {`${category.price}$`}
                    </div>
                  </div>
                  <div className="weekly-top-products-items-rating-and-count-container">
                    <div className="weekly-top-produts-items-rating">
                      <Stack spacing={1}>
                        {" "}
                        <Rating
                          name="half-rating-read"
                          defaultValue={0}
                          precision={0.5}
                          readOnly
                          color="blue"
                          size="small"
                          value={category.rating}
                          style={{ color: "#4dff55" }}
                        />
                      </Stack>
                    </div>

                    <div className="weekly-top-produts-items-count">
                      {category.stock}
                    </div>
                  </div>
                  <div className="weekly-top-products-items-add-to-cart-button">
                    Add To Cart
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WeeklyTopProducts;

// <div className="weekly-top-products-container">
//   <div className="weekly-top-product-text">Weekly Top Products For You</div>

//   <div className="weekly-top-products-category-container">
//     <div className="weekly-top-products-categories-container">
//       {categories.slice(0, 10).map((category: string) => {
//         return (
//           <div
//             className="weekly-top-products-categories-item"
//             onClick={() => fetchChangedCategory(category)}
//           >
//             {category}
//           </div>
//         );
//       })}
//     </div>

//     {categoryProducts.products
//       .slice(1, categoryProducts.products.length)
//       .map((category: Product) => {
//         return (
//           <>
//             <div className="weekly-top-products-items">
//               <div className="weekly-top-products-items-image-container">
//                 <div className="weekly-top-products-items-favorite">
//                   <Checkbox
//                     {...label}
//                     icon={<FavoriteBorder />}
//                     checkedIcon={<Favorite />}
//                   />
//                 </div>
//                 <img
//                   src={category.images[0]}
//                   className="weekly-top-products-items-image"
//                 ></img>
//               </div>

//               <div className="weekly-top-products-items-info-container">
//                 <div className="weekly-top-products-items-name-and-price-container">
//                   <div className="weekly-top-products-items-name">
//                     {category.title}
//                   </div>

//                   <div className="weekly-top-products-items-price">
//                     {`${category.price}$`}
//                   </div>
//                 </div>

//                 <div className="weekly-top-products-items-rating-container">
//                   <div className="weeekly-top-products-items-rating">
//                     <Stack spacing={1}>
//                       <Rating
//                         name="half-rating-read"
//                         defaultValue={0}
//                         precision={0.5}
//                         readOnly
//                         color="blue"
//                         size="small"
//                         value={category.rating}
//                       />
//                     </Stack>
//                   </div>
//                   <div className="weekly-top-products-items-rating-count-container">
//                     <div className="weekly-top-products-items-rating-count">
//                       {category.stock}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="weekly-top-products-items-add-to-cart-container">
//                   Add To Cart
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//       })}
//   </div>
// </div>
