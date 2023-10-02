"use client";

import styles from "./main.module.scss";
import { Pizza } from "./Pizza";
import { Pagination } from "./Pagination";
import { Filters } from "./Filters";
import { useEffect, useState } from "react";
import { PageType } from "@/types/page.type";
import { getAllPizzas } from "@/api/pizzas/getAllPizzas";
import { IPizza } from "./Pizza/pizza.interface";

export const Main = (): JSX.Element => {
    //@ts-ignore
    const [pizzas, setPizzas] = useState<IPizza[]>([]);
    //@ts-ignore
    const [page, setPage] = useState<PageType>(3);

    useEffect(() => {
        try {
            getAllPizzas("All", 1).then((data) => {
                console.log(data);
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <Filters />
            <section className={`container ${styles.main}`}>
                <h2>All pizzas</h2>
                <div className={styles.pizzas}>
                    <Pizza />
                </div>
                <Pagination />
            </section>
        </>
    );
};
