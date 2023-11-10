import { createSlice } from "@reduxjs/toolkit";

export const popupOrdersSlice = createSlice({
    name: "popup-orders",
    initialState: { isOpened: false },
    reducers: {
        setPopupOpened: (state) => {
            state.isOpened = true;
        },
        setPopupClosed: (state) => {
            state.isOpened = false;
        },
    },
});
