import { createSlice } from "@reduxjs/toolkit";

export interface ILocalStorage {
    toggle: boolean;
}

export const initStore: ILocalStorage = {
    toggle: false,
};

export const storageSlice = createSlice({
    name: "storage",
    initialState: initStore,
    reducers: {
        reloadLocalStorage: (state, action) => {
            state.toggle = action.payload;
        },
    },
});