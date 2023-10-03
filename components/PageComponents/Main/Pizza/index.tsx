import { useState } from "react";

import styles from "./pizza.module.scss";
import { PizzaProps } from "./pizza.props";

export const Pizza = ({ image, title, size26 }: PizzaProps): JSX.Element => {
    const sizes = [26, 30, 40];

    const [activeOptions, setActiveOptions] = useState({
        thickness: "thin",
        size: 26,
        price: size26.thin,
    });

    return (
        <article className={styles.pizza}>
            <img src={image} alt={title + " photo"} />
            <h3>{title}</h3>
            <div className={styles.options}>
                <div className={styles.top}>
                    <div className={styles.active}>thin</div>
                    <div>standard</div>
                </div>
                <div className={styles.diametr}>
                    {sizes.map((size) => (
                        <div
                            key={size}
                            className={
                                activeOptions.size === size ? styles.active : ""
                            }
                            onClick={() =>
                                setActiveOptions({
                                    ...activeOptions,
                                    size: size,
                                })
                            }
                        >
                            {size} cm.
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.priceButton}>
                <div className={styles.price}>{activeOptions.price} €</div>
                <button className={styles.button}>
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
