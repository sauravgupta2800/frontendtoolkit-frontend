import { createSlice } from "@reduxjs/toolkit";
import { getFromLS, saveToLS } from "../Components/utils";

const removedCardIds = getFromLS("removedCardIds") || [];

export const widgetsSlice = createSlice({
  name: "widgets",
  initialState: {
    list: [],
    removedIDs: removedCardIds,
    q: "",
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setQuery: (state, action) => {
      state.q = action.payload;
    },
    setRemovedID: (state, action) => {
      const removedIDs = [...state.removedIDs];
      removedIDs.push(action.payload);
      saveToLS("removedCardIds", removedIDs);
      state.removedIDs = removedIDs;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setList, setQuery, setRemovedID } = widgetsSlice.actions;

export default widgetsSlice.reducer;
