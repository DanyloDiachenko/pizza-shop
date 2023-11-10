"use client";

import { useDispatch } from "react-redux";
import styles from "./priceBusket.module.scss";
import { popupOrdersSlice } from "@/store/popupOrders/orders.slice";

export const PriceBusket = (): JSX.Element => {
    const dispatch = useDispatch();

    const setPopupOrdersOpened = () => {
        dispatch(popupOrdersSlice.actions.setPopupOpened());
    };

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
                <span>2</span>
            </span>
        </button>
    );
};
