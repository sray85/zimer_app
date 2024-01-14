import { createSlice } from "@reduxjs/toolkit";

const ClientResevationSlice = createSlice({
  name: "zimmerResevation",
  initialState: {
    zimmerResevation: [],
  },

  reducers: {
    addresevation(state, action) {
      const resevationData = action.payload.resevationData;
      console.log(resevationData);
      // state.zimmerResevation.push(resevationData);
    },
  },
});

export const { addresevation } = ClientResevationSlice.actions;
export default ClientResevationSlice.reducer;
