import cartReducer from "./redux/cartSlice";
import productReducer from "./redux/productSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
})

export default store