"use client";

import { useState, useRef } from "react";

import styles from "./sort.module.scss";
import { SortByProps } from "./sortBy.props";
import onClickOutside from "@/helpers/onClickOutside";

export const SortBy = ({
    sortVariants,
    activeSortVariant,
    setActiveSortVariant,
}: SortByProps): JSX.Element => {
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

    const selectWrapperRef = useRef<HTMLDivElement>(null);
    onClickOutside(selectWrapperRef, () => {
        setIsSelectOpen(false);
    });

    return (
        <div className={styles.wrapper} ref={selectWrapperRef}>
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
            {isSelectOpen && (
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
            )}
        </div>
    );
};
