import styles from "./priceBusket.module.scss"

export const PriceBusket = (): JSX.Element => {
    return (
        <div className={styles.wrapper} tabIndex={0}>
            <span className={styles.left}>
                <span className={styles.price}>1.32</span>
                <span>€</span>
            </span>
            <span className={styles.right}>
                <img src="/basket.svg" alt="busket icon" />
                <span>2</span>
            </span>
        </div>
    );
}