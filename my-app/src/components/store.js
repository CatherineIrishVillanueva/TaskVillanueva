import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Assets/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});