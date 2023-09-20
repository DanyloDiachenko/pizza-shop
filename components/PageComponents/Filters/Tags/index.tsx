"use client";

import { useState } from "react";

import styles from "./tags.module.scss";

export const Tags = (): JSX.Element => {
    const tags: string[] = [
        "All",
        "Meat",
        "Vegetarian",
        "Grill",
        "Spicy",
        "Calzone",
    ];

    const [activeTag, setActiveTag] = useState<string>(tags[0]);

    return (
        <div className={styles.tags}>
            {tags.map((tag, index) => (
                <button
                    className={activeTag === tag ? styles.active : ""}
                    key={index}
                    onClick={() => setActiveTag(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
};
