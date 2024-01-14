import { createSlice } from "@reduxjs/toolkit";

const navbarBtnStatusSlicer = createSlice({
  name: "navbarBtnStatus",
  initialState: {
    btnNavBar: null,
  },

  reducers: {
    addBtnSelction(state, action) {
      state.btnNavBar = action.payload;
    },
  },
});

export const { addBtnSelction } = navbarBtnStatusSlicer.actions;
export default navbarBtnStatusSlicer.reducer;
