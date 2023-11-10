import { configureStore } from "@reduxjs/toolkit";
import { popupOrdersSlice } from "./popupOrders/orders.slice";

export const store = configureStore({
    reducer: {
        popupOrders: popupOrdersSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;