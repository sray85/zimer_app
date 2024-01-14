import { createSlice } from "@reduxjs/toolkit";

const userDataSlicer = createSlice({
  name: "userdata",
  initialState: {
    userdata: " ",
  },

  reducers: {
    adduser(state, action) {
      state.userdata = action.payload;
    },
  },
});

export const { adduser } = userDataSlicer.actions;
export default userDataSlicer.reducer;
