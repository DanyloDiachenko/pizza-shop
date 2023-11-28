import styles from "./noPizzas.module.scss";
import { NoPizzasProps } from "./noPizzas.props";

export const NoPizzas = ({
    isActive,
    onComeBackButtonClick,
}: NoPizzasProps): JSX.Element => {
    return (
        <>
            <h2 className={styles.h2}>Cart is empty 😕</h2>
            <p className={styles.p}>
                Most likely, you haven't ordered pizza yet.
                <br />
                To order pizza, go to home page.
            </p>
            <img
                src="/empty-cart.png"
                alt="a men with a cart photo"
                className={styles.image}
            />
            <button
                onClick={onComeBackButtonClick}
                tabIndex={isActive ? 0 : -1}
                className={styles.button}
            >
                Come back
            </button>
        </>
    );
};
