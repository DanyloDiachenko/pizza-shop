"use client";

import { useState } from "react";

import styles from "./sort.module.scss";
import { SortByProps } from "./sortBy.props";

export const SortBy = ({
    sortVariants,
    activeSortVariant,
    setActiveSortVariant,
}: SortByProps): JSX.Element => {
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
                {activeSortVariant.title}
            </span>
            <div
                className={`${styles.select} ${
                    isSelectOpen ? styles.active : ""
                }`}
            >
                <ul>
                    {sortVariants.map((sortVariant, index) => (
                        <li
                            key={index}
                            className={
                                activeSortVariant.value === sortVariant.value
                                    ? styles.active
                                    : ""
                            }
                            onClick={() => setActiveSortVariant(sortVariant)}
                        >
                            {sortVariant.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
