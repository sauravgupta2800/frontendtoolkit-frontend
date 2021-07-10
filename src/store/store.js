import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";
import widgetsReducer from "./widgetsSlice";

export default configureStore({
  reducer: {
    card: cardReducer,
    widgets: widgetsReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: [
        "widgets/initList",
        "widgets/setRemovedID",
        "widgets/setQuery",
        "widgets/addCustomCard",
        "widgets/removeCustomCard",
        "widgets/setLayout",
        "card/setDrawerData",
        "card/resetDrawerData",
      ],
    },
  }),
});
