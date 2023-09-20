import styles from "./search.module.scss";

export const Search = (): JSX.Element => {
    return (
        <div className={styles.searchWrapper}>
            <img src="/search.svg" alt="search icon" />
            <input type="text" placeholder="Find any pizza..." />
        </div>
    );
};
