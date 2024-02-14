import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from "./app/features/Foods/FoodSlice";

const store = configureStore({
    reducer : {
        foodReducer : FoodReducer
    }
})

export default store;