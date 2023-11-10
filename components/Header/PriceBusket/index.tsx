"use client";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styles from "./priceBusket.module.scss";
import { popupOrdersSlice } from "@/store/popupOrders/orders.slice";
import { RootState } from "@/store";

export const PriceBusket = (): JSX.Element => {
    const dispatch = useDispatch();

    const [pizzasQuantity, setPizzasQuantity] = useState<number>(0);

    const setPopupOrdersOpened = () => {
        dispatch(popupOrdersSlice.actions.setPopupOpened());
    };

    const toggleLocalstorage = useSelector(
        (state: RootState) => state.localStorage.toggle,
    );

    useEffect(() => {
        const pizzas = JSON.parse(localStorage.getItem("basket") || "");

        if (pizzas) {
            setPizzasQuantity(pizzas.length);
        }
    }, [toggleLocalstorage]);

    return (
        <button
            className={styles.wrapper}
            tabIndex={0}
            onClick={setPopupOrdersOpened}
        >
            <span className={styles.left}>
                <span className={styles.price}>1.32</span>
                <span>€</span>
            </span>
            <span className={styles.right}>
                <img src="/basket.svg" alt="busket icon" />
                <span>{pizzasQuantity}</span>
            </span>
        </button>
    );
};
