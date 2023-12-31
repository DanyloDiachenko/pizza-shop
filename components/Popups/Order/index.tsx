"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NoPizzas } from "./NoPizzas";
import { Pizzas } from "./Pizzas";
import styles from "./popupOrder.module.scss";
import { RootState } from "@/store";
import { popupOrdersSlice } from "@/store/popupOrders/orders.slice";
import { IPizzaStorage } from "@/components/PageComponents/Main/Pizza/pizza.interface";
import { storageSlice } from "@/store/storage/storate.slice";

export const PopupOrder = (): JSX.Element => {
    const [pizzas, setPizzas] = useState<IPizzaStorage[]>([]);

    const isOpen = useSelector(
        (state: RootState) => state.popupOrders.isOpened,
    );

    const dispatch = useDispatch();

    const toggleLocalStorage = useSelector(
        (state: RootState) => state.localStorage.toggle,
    );

    const toggleLocalstorageHandler = () => {
        dispatch(storageSlice.actions.reloadLocalStorage(!toggleLocalStorage));
    };

    const setIsPopupOrdersClosed = () => {
        dispatch(popupOrdersSlice.actions.setPopupClosed());
    };

    const clearBasket = () => {
        localStorage.setItem("basket", "[]");
        toggleLocalstorageHandler();
    };

    useEffect(() => {
        const pizzasString = localStorage.basket;

        if (pizzasString) {
            setPizzas(JSON.parse(pizzasString));
        } else {
            setPizzas([]);
        }
    }, [toggleLocalStorage]);

    return (
        <>
            <div
                className={`${styles.bg} ${isOpen ? styles.bgActive : ""}`}
                onClick={setIsPopupOrdersClosed}
            ></div>
            <div className={`${styles.popup} ${isOpen ? styles.active : ""}`}>
                <div className={styles.popupOrders}>
                    <div className={styles.top}>
                        <div className={styles.leftCol}>
                            <img src="/basket-black.svg" alt="basket photo" />
                            <h2>Basket</h2>
                        </div>
                        {pizzas.length ? (
                            <div
                                className={styles.rightCol}
                                tabIndex={0}
                                onClick={clearBasket}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.5 5H4.16667H17.5"
                                        stroke="#B6B6B6"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                        stroke="#B6B6B6"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M8.33337 9.16667V14.1667"
                                        stroke="#B6B6B6"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path
                                        d="M11.6666 9.16667V14.1667"
                                        stroke="#B6B6B6"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                                <span>Clear basket</span>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    {pizzas.length ? (
                        <Pizzas pizzas={pizzas} />
                    ) : (
                        <NoPizzas
                            isActive={isOpen}
                            onComeBackButtonClick={setIsPopupOrdersClosed}
                        />
                    )}
                </div>
            </div>
        </>
    );
};
