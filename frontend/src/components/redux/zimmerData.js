import { createSlice } from "@reduxjs/toolkit";

const zimmerDataSlicer = createSlice({
  name: "zimmerinfo",
  initialState: {
    zimmerdata: " ",
  },

  reducers: {
    addZimerData(state, action) {
      state.zimmerdata = action.payload;
    },
  },
});

export default zimmerDataSlicer.reducer;
export const { addZimerData } = zimmerDataSlicer.actions;
