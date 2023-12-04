import { createSlice } from "@reduxjs/toolkit";

type isAuth = {
  auth: string | null;
};
let initialState: isAuth = {
  auth: null,
};
let userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userAuth(
      state: isAuth,
      action: {
        payload: any;
        type: string;
      }
    ) {
      state.auth = action.payload;
    },
  },
});

export const { userAuth } = userSlice.actions;

export default userSlice.reducer;
