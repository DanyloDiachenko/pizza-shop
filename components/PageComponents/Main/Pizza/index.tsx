import { useState } from "react";

import styles from "./pizza.module.scss";
import { PizzaProps } from "./pizza.props";
import { PizzaRadiusType } from "@/types/pizzaRadius.type";
import { PizzaThicknessType } from "@/types/pizzaThickness.type";

export const Pizza = ({
    image,
    title,
    size26,
    size30,
    size40,
    _id,
}: PizzaProps): JSX.Element => {
    const sizes: PizzaRadiusType[] = [26, 30, 40];
    const thikness: PizzaThicknessType[] = ["thin", "standard"];

    const [activeOptions, setActiveOptions] = useState({
        thickness: "thin",
        size: 26,
        price: size26.thin,
    });

    const setActiveSizeOptionHandler = (size: PizzaRadiusType): void => {
        let price: number;
        switch (size) {
            case 26:
                price =
                    activeOptions.thickness === "thin"
                        ? size26.thin
                        : size26.standard;
                break;
            case 30:
                price =
                    activeOptions.thickness === "thin"
                        ? size30.thin
                        : size30.standard;
                break;
            case 40:
                price =
                    activeOptions.thickness === "thin"
                        ? size40.thin
                        : size40.standard;
                break;
            default:
                price = 0;
        }
        setActiveOptions({
            ...activeOptions,
            size: size,
            price: price,
        });
    };

    const setActiveTicknessOptionHandler = (
        thickness: PizzaThicknessType,
    ): void => {
        let price: number;
        switch (thickness) {
            case "thin":
                price =
                    activeOptions.size === 26
                        ? size26.thin
                        : activeOptions.size === 30
                        ? size30.thin
                        : size40.thin;
                break;
            case "standard":
                price =
                    activeOptions.size === 26
                        ? size26.standard
                        : activeOptions.size === 30
                        ? size30.standard
                        : size40.standard;
                break;
            default:
                price = 0;
        }
        setActiveOptions({
            ...activeOptions,
            thickness: thickness,
            price: price,
        });
    };

    const addProductToBasket = (pizzaId: string): void => {
        const existingItems = JSON.parse(
            localStorage.getItem("basket") || "[]",
        );

        const selectedPizza = {
            _id: pizzaId,
            image,
            title,
            size: activeOptions.size,
            thickness: activeOptions.thickness,
            price: activeOptions.price,
            count: 1,
        };

        const existingItemIndex = existingItems.findIndex(
            (item: any) =>
                item._id === selectedPizza._id &&
                item.size === selectedPizza.size &&
                item.thickness === selectedPizza.thickness,
        );

        if (existingItemIndex === -1) {
            selectedPizza.count = 1;
            existingItems.push(selectedPizza);
        } else {
            existingItems[existingItemIndex].count++;
        }

        localStorage.setItem("basket", JSON.stringify(existingItems));
    };

    return (
        <article className={styles.pizza}>
            <img src={image} alt={title + " photo"} />
            <h3>{title}</h3>
            <div className={styles.options}>
                <div className={styles.top}>
                    {thikness.map((thikness, index) => (
                        <div
                            className={
                                activeOptions.thickness === thikness
                                    ? styles.active
                                    : ""
                            }
                            onClick={() =>
                                setActiveTicknessOptionHandler(thikness)
                            }
                            key={index}
                        >
                            {thikness}
                        </div>
                    ))}
                </div>
                <div className={styles.diametr}>
                    {sizes.map((size) => (
                        <div
                            key={size}
                            className={
                                activeOptions.size === size ? styles.active : ""
                            }
                            onClick={() => setActiveSizeOptionHandler(size)}
                        >
                            {size} cm.
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.priceButton}>
                <div className={styles.price}>
                    {activeOptions.price.toFixed(2)} €
                </div>
                <button
                    className={styles.button}
                    onClick={() => addProductToBasket(_id)}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#fe5f1e"
                        ></path>
                    </svg>
                    <span>Add to basket</span>
                </button>
            </div>
        </article>
    );
};
