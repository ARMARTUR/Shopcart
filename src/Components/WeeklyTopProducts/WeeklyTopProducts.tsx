import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/Hook";
import { TypeFetchResult } from "../../Redux/SearchProductReducer";
import "./WeeklyTopProducts.css";
import { fetchProductByCategory } from "../../Redux/SearchProductReducer";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";
function WeeklyTopProducts() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let categories: string[] = useAppSelector(
    (state) => state.categories.categories
  );
  let categoryProducts: TypeFetchResult = useAppSelector(
    (state) => state.searchProduct.products
  );
  const changeDirectory = async (
    id: number,
    product: string
  ): Promise<void> => {
    return navigate(`product/${id}`, {
      state: {
        product: product,
      },
    });
  };
  useEffect(() => {
    dispatch(fetchProductByCategory("laptops"));
  }, []);
  function fetchChangedCategory(category: string) {
    dispatch(fetchProductByCategory(category));
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="weekly-top-products-container">
      <div className="weekly-top-product-text">Weekly Top Products For You</div>

      <div className="weekly-top-products-categories-container">
        {categories.slice(1, 7).map((category: string) => {
          return (
            <div
              className={`weekly-top-products-categories-items`}
              onClick={() => {
                fetchChangedCategory(category);
              }}
            >
              {category.slice(0, 1).toUpperCase() +
                category.slice(1, category.length)}
            </div>
          );
        })}
      </div>
      <div className="weekly-top-products-item-container">
        {categoryProducts.products
          .slice(1, categoryProducts.products.length)
          .map((category) => {
            return (
              <div
                className="weekly-top-products-item"
                onClick={() => changeDirectory(category.id, category.title)}
              >
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
                      {`(${category.stock})`}
                    </div>
                  </div>
                  <div
                    className="weekly-top-products-items-add-to-cart-button"
                    onClick={(
                      e: React.MouseEvent<HTMLDivElement, MouseEvent>
                    ) => {
                      e.stopPropagation();
                    }}
                  >
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
