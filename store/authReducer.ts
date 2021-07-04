import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isAuth: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authReducer.actions;
export default authReducer.reducer;
