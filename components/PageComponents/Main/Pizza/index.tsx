import styles from "./pizza.module.scss";

export const Pizza = (): JSX.Element => {
    return (
        <article className={styles.pizza}>
            <img
                src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg"
                alt="margarita"
            />
            <h3>Margarita</h3>
            <div className={styles.options}>
                <div className={styles.top}>
                    <div className={styles.active}>thin</div>
                    <div>standard</div>
                </div>
                <div className={styles.diametr}>
                    <div className={styles.active}>26 cm.</div>
                    <div>30 cm.</div>
                    <div>40 cm.</div>
                </div>
            </div>
            <div className={styles.price}>from {4.38} €</div>
        </article>
    );
};
