import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
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
    userAuth(state, action) {
      state.auth = action.payload;
    },
  },
});

export const { userAuth } = userSlice.actions;
console.log(userSlice.reducer, "opuiodsyfhds");
export default userSlice.reducer;
