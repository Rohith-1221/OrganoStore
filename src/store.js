import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./components/cart/features/cartSlice";

export const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})