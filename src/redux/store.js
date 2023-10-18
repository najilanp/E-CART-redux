import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartlistReducer:cartSlice

    }
})
export default store