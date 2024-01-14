import { createSlice } from "@reduxjs/toolkit";

const searchOption = createSlice({
  name: "seach",
  initialState: {
    searchInput: " ",
  },

  reducers: {
    searchFor(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const { searchFor } = searchOption.actions;
export default searchOption.reducer;
