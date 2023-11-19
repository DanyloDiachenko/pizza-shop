"use client";

import { useDispatch } from "react-redux";

import styles from "./search.module.scss";
import { searchPizzaSlice } from "@/store/searchPizza/searchPizza.slice";

export const Search = (): JSX.Element => {
    const dispatch = useDispatch();

    const setInput = (value: string) => {
        dispatch(searchPizzaSlice.actions.setSearchPizza(value));
    };

    return (
        <div className={styles.searchWrapper}>
            <img src="/search.svg" alt="search icon" />
            <input
                type="text"
                placeholder="Find any pizza..."
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
};
