"use client";

import { useState, useRef, KeyboardEvent } from "react";

import styles from "./sort.module.scss";
import { SortByProps } from "./sortBy.props";
import { onClickOutside } from "@/helpers/onClickOutside";
import { ISortVariant } from "./sortVariant.interface";

export const SortBy = ({
    sortVariants,
    activeSortVariant,
    setActiveSortVariant,
}: SortByProps): JSX.Element => {
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    const selectWrapperRef = useRef<HTMLDivElement>(null);
    onClickOutside(selectWrapperRef, () => {
        setIsSelectOpen(false);
    });

    const setIsSelectOpenKeyboard = (e: KeyboardEvent<HTMLSpanElement>) => {
        if (e.code === "Enter" || e.code === "Space") {
            setIsSelectOpen(!isSelectOpen);
        }
    };

    const setActiveSortVariantKeyboard = (
        e: KeyboardEvent<HTMLSpanElement>,
        sortVariant: ISortVariant,
    ) => {
        if (e.code === "Enter" || e.code === "Space") {
            setActiveSortVariant(sortVariant);
        }
    };

    const onBlurHandler = () => {
        timeoutIdRef.current = setTimeout(() => {
            if (isSelectOpen) {
                setIsSelectOpen(false);
            }
        }, 100);
    };

    const onFocusHandler = () => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }
    };

    return (
        <div className={styles.wrapper} ref={selectWrapperRef}>
            <img src="/sort.svg" alt="sort icon" />
            <span className={styles.title}>Sort by:</span>
            <span
                tabIndex={0}
                className={styles.value}
                onClick={() => setIsSelectOpen(!isSelectOpen)}
                onKeyDown={(e) => setIsSelectOpenKeyboard(e)}
            >
                {activeSortVariant.title}
            </span>
            {isSelectOpen && (
                <ul onBlur={onBlurHandler} onFocus={onFocusHandler}>
                    {sortVariants.map((sortVariant, index) => (
                        <li
                            key={index}
                            className={
                                activeSortVariant.value === sortVariant.value
                                    ? styles.active
                                    : ""
                            }
                            onClick={() => setActiveSortVariant(sortVariant)}
                            onKeyDown={(e) =>
                                setActiveSortVariantKeyboard(e, sortVariant)
                            }
                            tabIndex={isSelectOpen ? 0 : -1}
                        >
                            {sortVariant.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
