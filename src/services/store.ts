import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./cardsSlice";

export const store = configureStore({
  reducer: {
    items: cardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
