import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    details: {},
  },
  reducers: {
    setDrawerData: (state, action) => {
      console.log("action: ", action);
      state.details = action.payload;
    },
    resetDrawerData: (state) => {
      console.log("state: ==> rest");
      state.details = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDrawerData, resetDrawerData } = cardSlice.actions;

export default cardSlice.reducer;
