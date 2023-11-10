import styles from "./noPizzas.module.scss";

export const NoPizzas = (): JSX.Element => {
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
                <button>Come back</button>
            </div>
        </>
    );
};
