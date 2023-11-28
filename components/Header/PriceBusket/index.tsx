"use client";

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styles from "./priceBusket.module.scss";
import { popupOrdersSlice } from "@/store/popupOrders/orders.slice";
import { RootState } from "@/store";
import { IPizzaStorage } from "@/components/PageComponents/Main/Pizza/pizza.interface";

export const PriceBusket = (): JSX.Element => {
    const dispatch = useDispatch();

    const [pizzas, setPizzas] = useState<IPizzaStorage[]>([]);

    const setPopupOrdersOpened = () => {
        dispatch(popupOrdersSlice.actions.setPopupOpened());
    };


    const toggleLocalstorage = useSelector(
        (state: RootState) => state.localStorage.toggle,
    );

    const countTotalPrice = () => {
        let total: number = 0;

        for (let i = 0, len = pizzas.length; i < len; i++) {
            total += pizzas[i].count * pizzas[i].price;
        }

        return total.toFixed(2);
    };

    const countPizzasQuantity = () => {
        let quantity: number = 0;

        for (let i = 0, len = pizzas.length; i < len; i++) {
            quantity += pizzas[i].count;
        }

        return quantity;
    };

    useEffect(() => {
        const pizzasString = localStorage.basket;

        if (!pizzasString) {
            return;
        }

        const pizzas = JSON.parse(pizzasString);

        if (pizzas) {
            setPizzas(pizzas);
        } else {
            setPizzas([]);
        }
    }, [toggleLocalstorage]);

    return (
        <button
            className={styles.wrapper}
            tabIndex={0}
            onClick={setPopupOrdersOpened}
            aria-label='Price and pizzas quantity. Open modal to check orders list'
        >
            <span className={styles.left}>
                <span className={styles.price}>{countTotalPrice()}</span>
                <span>€</span>
            </span>
            <span className={styles.right}>
                <img src="/basket.svg" alt="busket icon" />
                <span>{countPizzasQuantity()}</span>
            </span>
        </button>
    );
};
