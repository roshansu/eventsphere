import { configureStore } from "@reduxjs/toolkit";
import navSlice from './Slice'

const store = configureStore({
    reducer:{
        navSlice: navSlice,
    }
})

export default store;