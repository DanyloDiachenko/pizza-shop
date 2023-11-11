import { IPizzaStorage } from "@/components/PageComponents/Main/Pizza/pizza.interface";
import { BackButton } from "./BackButton";
import styles from "./pizzas.module.scss";
import { PizzasProps } from "./pizzas.props";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { storageSlice } from "@/store/storage/storate.slice";

export const Pizzas = ({ pizzas }: PizzasProps): JSX.Element => {
    const dispatch = useDispatch();

    const toggleLocalStorage = useSelector(
        (state: RootState) => state.localStorage.toggle,
    );
    const toggleLocalstorageHandler = () => {
        dispatch(storageSlice.actions.reloadLocalStorage(!toggleLocalStorage));
    };

    const countPricePerPizza = (pizza: IPizzaStorage) => {
        return (pizza.count * pizza.price).toFixed(2);
    };

    const sortPizzas = () => {
        return pizzas.sort((a, b) => {
            if (a.title > b.title && a.price > b.price) {
                return 1;
            }
            if (a.title < b.title && a.price < b.price) {
                return -1;
            }

            return 0;
        });
    };

    const removePizza = (pizza: IPizzaStorage) => {
        const newPizzas = pizzas.filter(
            (pizzaStorage) =>
                pizzaStorage._id !== pizza._id ||
                (pizzaStorage._id === pizza._id &&
                    (pizzaStorage.size !== pizza.size ||
                        pizzaStorage.thickness !== pizza.thickness)),
        );

        localStorage.setItem("basket", JSON.stringify(newPizzas));
        toggleLocalstorageHandler();
    };

    return (
        <>
            <div className={styles.pizzas}>
                {sortPizzas().map((pizza, index) => (
                    <div key={index} className={styles.pizza}>
                        <img
                            className={styles.pizzaImg}
                            src={pizza.image}
                            alt={pizza.title + " photo"}
                        />
                        <div className={styles.titleDescription}>
                            <h3>{pizza.title}</h3>
                            <p>
                                {pizza.thickness} tough, {pizza.size} cm.
                            </p>
                        </div>
                        <div className={styles.plusCountMinus}>
                            <button
                                className={`${styles.btn} ${styles.inactive}`}
                            >
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                        fill="#EB5A1E"
                                    ></path>
                                </svg>
                            </button>
                            <b>{pizza.count}</b>
                            <div className={styles.btn}>
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                        fill="#EB5A1E"
                                    ></path>
                                    <path
                                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                        fill="#EB5A1E"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className={styles.price}>
                            {countPricePerPizza(pizza)} €
                        </div>
                        <div className={styles.remove}>
                            <button onClick={() => removePizza(pizza)}>
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                        fill="#EB5A1E"
                                    ></path>
                                    <path
                                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                        fill="#EB5A1E"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.orderInfo}>
                <span className={styles.pizzasCount}>
                    Total pizzas: <b>4 pcs.</b>
                </span>
                <span className={styles.total}>
                    Order price: <b>200 $</b>
                </span>
            </div>
            <div className={styles.buttons}>
                <BackButton />
                <button className={styles.pay}>Pay now</button>
            </div>
        </>
    );
};
