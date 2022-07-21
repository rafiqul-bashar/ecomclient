import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    status: null

}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct(state, action) {
            console.log(action.payload);

        }
    }
})

export default productSlice.reducer