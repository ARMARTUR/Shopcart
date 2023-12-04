import React, { useEffect } from "react";

import Banner from "../../Components/Banner/Banner";
import TodayBestDeals from "../../Components/TodaysBestDeals/TodayBestDeals";
import { useAppDispatch } from "../../Redux/Hook";
import DiscountBanner from "../../Components/DiscountBanner/DiscountBanner";
import WeeklyTopProducts from "../../Components/WeeklyTopProducts/WeeklyTopProducts";
import { fetchCategories } from "../../Redux/CategoriesReducer";
import ProductPage from "../ProductPage/ProductPage";
import Footer from "../../Components/Footer/Footer";
function HomePage(): JSX.Element {
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Banner />
      <TodayBestDeals />
      <DiscountBanner />
      <WeeklyTopProducts />
      <Footer />
    </>
  );
}

export default HomePage;
