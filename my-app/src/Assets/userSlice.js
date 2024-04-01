import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
        },
        signUp: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { signIn, signUp } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;