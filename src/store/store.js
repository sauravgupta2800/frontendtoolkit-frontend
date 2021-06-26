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
        "widgets/setList",
        "widgets/setRemovedID",
        "widgets/setQuery",
        "card/setDrawerData",
        "card/resetDrawerData",
      ],
    },
  }),
});
