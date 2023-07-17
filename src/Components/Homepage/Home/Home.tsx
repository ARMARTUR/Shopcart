import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import TodayBestDeals from "../TodaysBestDeals/TodayBestDeals";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import WeeklyTopProducts from "../WeeklyTopProducts/WeeklyTopProducts";
import { fetchCategories } from "../../../Redux/CategoriesReducer";
import { useAppDispatch } from "../../../Redux/Hook";
import { fetchProductByCategory } from "../../../Redux/SearchProductReducer";
import { useAppSelector } from "../../../Redux/Hook";
function Home() {
  let dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <TodayBestDeals />
      <DiscountBanner />
      <WeeklyTopProducts />
    </>
  );
}

export default Home;
