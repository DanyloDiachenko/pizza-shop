'use client';

import { useState } from "react";

import styles from "./sort.module.scss";

export const SortBy = (): JSX.Element => {
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <img src="/sort.svg" alt="sort icon" />
            <span className={styles.title}>Sort by:</span>
            <span
                tabIndex={0}
                className={styles.value}
                onClick={() => setIsSelectOpen(!isSelectOpen)}
                onKeyDown={() => setIsSelectOpen(!isSelectOpen)}
            >
                rating
            </span>
            <div
                className={`${styles.select} ${
                    isSelectOpen ? styles.active : ""
                }`}
            >
                <ul>
                    <li className={styles.active}>rating</li>
                    <li>price (desc)</li>
                    <li>price (asc)</li>
                    <li>alphabet (desc)</li>
                    <li>alphabet (asc)</li>
                </ul>
            </div>
        </div>
    );
};
