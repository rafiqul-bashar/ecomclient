import React from "react";
import HomeCategories from "../../Home/HomeCategories";

import HomeSlides from "../../Home/HomeSlides";
import ShopFeatures from "../../Home/ShopFeatures";
import TopProducts from "../../Home/TopProducts";
import sale from "../../../assets/sale.jpg";
import MensProduct from "../../Home/MensProduct";
export default function Home() {
  return (
    <div>
      <HomeSlides />
      <ShopFeatures />
      <HomeCategories />
      <div className="bg-[#E7D9DB] text-[#C92C34] text-center py-6 my-2 font-semibold container">
        <h3 className="text-3xl">Up to 15% discount on your first purchase!</h3>
        <br />
        <span className="text-right border-2 border-dashed p-1 my-2 border-red-400">
          FREE4ME
        </span>
        <br />
        <br />
        <p>Use discount code in checkout to get the discount.</p>
      </div>
      <TopProducts />
      <div>
        <img src={sale} alt="offer" />
      </div>
      <MensProduct />
    </div>
  );
}
