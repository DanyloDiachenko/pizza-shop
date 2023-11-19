import { configureStore } from "@reduxjs/toolkit";
import { popupOrdersSlice } from "./popupOrders/orders.slice";
import { storageSlice } from "./storage/storate.slice";
import { searchPizzaSlice } from "./searchPizza/searchPizza.slice";

export const store = configureStore({
    reducer: {
        popupOrders: popupOrdersSlice.reducer,
        localStorage: storageSlice.reducer,
        searchPizza: searchPizzaSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
