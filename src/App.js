import "./App.css";

import { Route, Routes } from "react-router-dom";
import {
  Auth,
  Cart,
  Footer,
  Header,
  Home,
  Notfound,
  Products,
  Profile,
  ProtectedRoute,
  SingleProduct,
} from "./Components";
import {
  AdminHeader,
  AdminProducts,
  Dashboard,
  EditProduct,
} from "./Components/Admin";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import { fetchProducts, selectStatus } from "./redux/productSlice";
import ScrollToTop from "./Components/Common/ScrollToTop";
const admin = !true;
const user = false;

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  React.useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  if (admin === true) {
    return (
      <>
        <AdminHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/product/:id" element={<EditProduct />} />
          <Route path="/product/:id" element={<EditProduct />} />
          <Route path="/myaccount" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </>
    );
  } else
    return (
      <>
        <ToastContainer />
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mycart" element={<Cart />} />
            <Route
              path="/myaccount"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* <Route element={<ProtectedRoute user={user} />}>
          </Route> */}
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </>
    );
}

export default App;
