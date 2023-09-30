import styles from "./main.module.scss";
import { Pizza } from "./Pizza";
import { Pagination } from "./Pagination";

export const Main = (): JSX.Element => {
    return (
        <section className={`container ${styles.main}`}>
            <h2>All pizzas</h2>
            <div className={styles.pizzas}>
                <Pizza />
            </div>
            <Pagination />
        </section>
    );
};
