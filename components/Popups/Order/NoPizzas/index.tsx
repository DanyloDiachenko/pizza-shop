import styles from "./noPizzas.module.scss";
import { NoPizzasProps } from "./noPizzas.props";

export const NoPizzas = ({ isActive }: NoPizzasProps): JSX.Element => {
    return (
        <>
            <h2 className={styles.h2}>Cart is empty 😕</h2>
            <p className={styles.p}>
                Most likely, you haven't ordered pizza yet.
                <br />
                To order pizza, go to home page.
            </p>
            <div className={styles.imgWrapper}>
                <img src="/empty-cart.png" alt="a men with a cart photo" />
            </div>
            <div className={styles.btnWrapper}>
                <button tabIndex={isActive ? 0 : -1}>Come back</button>
            </div>
        </>
    );
};
