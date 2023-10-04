"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./main.module.scss";
import { Pizza } from "./Pizza";
import { Pagination } from "./Pagination";
import { Filters } from "./Filters";
import { PageType } from "@/types/page.type";
import { getAllPizzas } from "@/api/pizzas/getAllPizzas";
import { IPizza } from "./Pizza/pizza.interface";
import { TagType } from "@/types/tag.type";
import { SortByType } from "@/types/sortBy.type";
import { ISortVariant } from "./Filters/SortBy/sortVariant.interface";
import { tags } from "@/data/tags";
import { sortVariants } from "@/data/sortVariants";

export const Main = (): JSX.Element => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const tagParam: string | null = searchParams.get("tag");
    const pageNumberParam: string | null = searchParams.get("page");
    const sortByParam: string | null = searchParams.get("sortBy");

    const [activeTag, setActiveTag] = useState<TagType>(
        tagParam
            ? (tags.find(
                  (tag) =>
                      tag ===
                      tagParam.charAt(0).toUpperCase() + tagParam.slice(1),
              ) as TagType)
            : "All",
    );
    const [pizzas, setPizzas] = useState<IPizza[]>([]);
    const [activePage, setActivePage] = useState<PageType>(
        pageNumberParam ? (Number(pageNumberParam) as PageType) : 1,
    );
    const [activeSortVariant, setActiveSortVariant] = useState<ISortVariant>(
        sortByParam
            ? (sortVariants.find(
                  (sortVariant) => sortVariant.value === sortByParam,
              ) as ISortVariant)
            : sortVariants[0],
    );

    useEffect(() => {
        try {
            getAllPizzas(
                tagParam ? (tagParam as TagType) : "All",
                activePage ? activePage : 1,
                sortByParam ? (sortByParam as SortByType) : "rating",
            ).then((data) => {
                if (data.success) {
                    setPizzas(data.data);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        router.push(
            `?tag=${activeTag.toLocaleLowerCase()}&page=${activePage}&sortBy=${
                activeSortVariant.value
            }`,
        );

        try {
            getAllPizzas(activeTag, activePage, activeSortVariant.value).then(
                (data) => {
                    console.log(data);
                    if (data.success) {
                        setPizzas(data.data);
                    }
                },
            );
        } catch (error) {
            console.log(error);
        }
    }, [activePage, activeTag, activeSortVariant]);

    return (
        <>
            <Filters
                activeTag={activeTag}
                setActiveTag={setActiveTag}
                tags={tags}
                sortVariants={sortVariants}
                activeSortVariant={activeSortVariant}
                setActiveSortVariant={setActiveSortVariant}
            />
            <section className={`container ${styles.main}`}>
                <h2>All pizzas</h2>
                <div className={styles.pizzas}>
                    {pizzas.map((pizza) => (
                        <Pizza {...pizza} key={pizza._id} />
                    ))}
                </div>
                <Pagination
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </section>
        </>
    );
};
