import { Navigation, Pagination, Scrollbar, A11y, autoplay } from "swiper";
import "./TodayBestDeals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector, useAppDispatch } from "../../../Redux/Hook";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Box from "@mui/joy/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { CircularProgress } from "@mui/joy";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { auth, db } from "../../../Firebase/Firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { fetchListProducts } from "../../../Redux/ProductsReducer";
import { FetchResult } from "../../../Redux/ProductsReducer";
function TodayBestDeals() {
  const productsList: FetchResult = useAppSelector(
    (state) => state.products.products
  );

  const isLoading: boolean = useAppSelector((state) => state.products.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListProducts());
  }, []);
  const changeFavorite = async (id: any) => {
    console.log(id, 646237843764862367);
    console.log(auth.currentUser?.uid);
    if (auth.currentUser) {
      const favoriteRef = doc(db, "Users", `${auth.currentUser?.uid}`);
      await updateDoc(favoriteRef, {
        favoriteMovies: arrayUnion(`${id}`), ////stex piti lini mer apranqi idin
      });
    }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return isLoading === true ? (
    <div className="today-best-deals-container">
      <div className="today-best-deals-text">Todays Best Deals For You!</div>
      <div className="best-deals-items-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          speed={300}
          spaceBetween={1}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000 }}
        >
          {productsList.products.slice(1, 6).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="best-deals-items">
                <div className="best-deals-image-favorite-container">
                  <div className="best-deals-favorite-icon">
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onClick={() => {
                        changeFavorite(product.id);
                      }}
                    />
                  </div>
                  <div className="best-deals-item-image-container">
                    <img
                      src={`${product.images[0]}`}
                      className="best-deals-item-image"
                      alt="Product Image"
                    />
                  </div>
                </div>

                <div className="best-deals-item-info">
                  <div className="best-deals-item-title">{product.title}</div>
                  <div className="best-deals-item-price">
                    {" "}
                    {`$${product.price}`}
                  </div>
                  <div className="best-deals-item-rate-container">
                    <div className="  best-deals-item-rate">
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={product.rating}
                          precision={0.5}
                          readOnly
                          color="blue"
                          size="small"
                        />
                      </Stack>
                    </div>
                    <div className="best-deals-item-rate-count">{`(${product.stock})`}</div>
                  </div>
                  <div className="best-deals-item-add-to-cart">Add to Cart</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  ) : (
    <div className="today-best-deals-circular-progress">
      <Box
        sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}
      >
        <CircularProgress size="md" className="circular-progress" />
      </Box>
    </div>
  );
}

export default TodayBestDeals;
