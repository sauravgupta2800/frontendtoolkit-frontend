import { createSlice } from "@reduxjs/toolkit";
import { getFromLS, saveToLS } from "../Components/utils";
import { addCustomComponent } from "../Components/UI/WidgetLayouts/config";

const removedCardIds = getFromLS("removedCardIds") || [];
const customList = getFromLS("customList") || [];
const layout = getFromLS("layout") || "table";
const originalLayouts = JSON.parse(JSON.stringify(getFromLS("layouts") || {}));

export const widgetsSlice = createSlice({
  name: "widgets",
  initialState: {
    list: [],
    customList: customList,
    removedIDs: removedCardIds,
    layout: layout,
    q: "",
    originalLayouts: originalLayouts,
  },
  reducers: {
    initList: (state, action) => {
      const customList = state.customList.map((field) =>
        addCustomComponent(field)
      );
      state.list = [...customList, ...action.payload];
    },
    setQuery: (state, action) => {
      state.q = action.payload;
    },
    setRemovedID: (state, action) => {
      const { id, remove = true } = action.payload;
      let removedIDs = [...state.removedIDs];
      if (remove) removedIDs.push(id);
      else removedIDs = removedIDs.filter((itemId) => itemId !== id);
      state.removedIDs = removedIDs;
      saveToLS("removedCardIds", removedIDs);
    },
    addCustomCard: (state, action) => {
      const cardData = action.payload;
      const customList = [...[cardData], ...state.customList];
      state.customList = customList;
      state.list = [...[addCustomComponent(cardData)], ...state.list];
      saveToLS("customList", customList);
    },
    removeCustomCard: (state, action) => {
      const id = action.payload;
      const customList = state.customList.filter(
        (item) => item.key_name !== id
      );
      const removedIDs = state.removedIDs.filter((itemId) => itemId !== id);
      state.customList = customList;
      state.removedIDs = removedIDs;
      state.list = state.list.filter((item) => item.key_name !== id);
      saveToLS("customList", customList);
      saveToLS("removedCardIds", removedIDs);
    },
    setLayout: (state, action) => {
      const layout = action.payload;
      saveToLS("layout", layout);
      state.layout = layout;
    },
    setOriginalLayout: (state, action) => {
      saveToLS("layouts", action.payload);
      state.originalLayouts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  initList,
  setQuery,
  setRemovedID,
  addCustomCard,
  setLayout,
  removeCustomCard,
  setOriginalLayout,
} = widgetsSlice.actions;

export default widgetsSlice.reducer;
