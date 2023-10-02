import { Tags } from "./Tags";
import styles from "./filters.module.scss";
import { SortBy } from "./SortBy";

export const Filters = (): JSX.Element => {
    return (
        <section className={`container ${styles.filters}`}>
            <Tags />
            <SortBy />
        </section>
    );
}