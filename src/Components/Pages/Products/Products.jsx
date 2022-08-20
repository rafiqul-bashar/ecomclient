import React from "react";
// import { products } from '../../../staticdata'
// import { RiShoppingCart2Line } from "react-icons/ri"
import { useLocation } from "react-router";
import Loading from "../../Common/Loading";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  loadedProducts,
  selectStatus,
} from "../../../redux/productSlice";
import ProductsContainer from "./ProductsContainer";

const categories = [
  "all",
  "electronics",
  "men's clothing",
  "women's clothing",
  "jewelery",
];
export default function Products() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const products = useSelector(loadedProducts);
  const { state } = useLocation();
  const [filtered, setFiltered] = React.useState("all");
  const result = products.filter((product) => product.category === filtered);

  React.useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);
  React.useEffect(() => {
    if (state?.category) {
      setFiltered(state.category.title);
    }
  }, []);
  // console.log(state.category.title);
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <section className=" px-12 grid grid-cols-1 md:grid-cols-4 py-12">
      <div>
        <div className="sticky top-[20%]">
          <h1 className="ml-20 mb-5 text-lg font-semibold ">
            Find by categories{" "}
          </h1>
          <div className="grid grid-cols-2 gap-5">
            {categories.map((cat, index) => (
              <div
                onClick={() => setFiltered(cat)}
                key={index}
                className="capitalize bg-green-600 font-semibold text-white text-center cursor-pointer scale-85 hover:scale-95 transition-all p-2 "
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <ProductsContainer products={filtered === "all" ? products : result} />
      </div>
    </section>
  );
}
