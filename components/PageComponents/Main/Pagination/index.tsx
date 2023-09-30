import styles from "./pagination.module.scss";

export const Pagination = (): JSX.Element => {
    return (
        <div className={styles.pagination}>
            <div>{"<"}</div>
            <div className={styles.active}>1</div>
            <div>2</div>
            <div>3</div>
            <div>{">"}</div>
        </div>
    );
};
