import { configureStore } from "@reduxjs/toolkit";
import { popupOrdersSlice } from "./popupOrders/orders.slice";
import { storageSlice } from "./storage/storate.slice";

export const store = configureStore({
    reducer: {
        popupOrders: popupOrdersSlice.reducer,
        localStorage: storageSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;