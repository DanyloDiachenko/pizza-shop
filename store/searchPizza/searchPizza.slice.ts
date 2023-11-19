import { createSlice } from "@reduxjs/toolkit";

export const searchPizzaSlice = createSlice({
    name: "search-pizza",
    initialState: { searchPizza: "" },
    reducers: {
        setSearchPizza: (state, { payload }) => {
            state.searchPizza = payload;
        },
    },
});
