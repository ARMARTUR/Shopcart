import { createSlice } from "@reduxjs/toolkit";

export type typeSnackbar = {
  message: string;
  color: boolean;
  open: boolean;
};
let initialState: typeSnackbar = {
  message: " Your message was sent successfully",
  color: false,
  open: false,
};
let snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    setSnackbar(
      state: typeSnackbar,
      action: {
        payload: any;
        type: string;
      }
    ) {
      state.message = action.payload.message;
      state.color = action.payload.color;
      state.open = action.payload.open;
    },
  },
});

export const { setSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
