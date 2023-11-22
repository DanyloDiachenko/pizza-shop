"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./main.module.scss";
import { Pizza } from "./Pizza";
import { Pagination } from "./Pagination";
import { Filters } from "./Filters";
import { PageType } from "@/types/page.type";
import { getAllPizzas } from "@/api/pizzas/getAllPizzas";
import { IPizza } from "./Pizza/pizza.interface";
import { TagType } from "@/types/tag.type";
import { ISortVariant } from "./Filters/SortBy/sortVariant.interface";
import { tags } from "@/data/tags";
import { sortVariants } from "@/data/sortVariants";
import { RootState } from "@/store";

export const Main = (): JSX.Element => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const tagParam: string | null = searchParams.get("tag");
    const pageNumberParam: string | null = searchParams.get("page");
    const sortByParam: string | null = searchParams.get("sortBy");
    const searchPizza: string = useSelector((state: RootState) => {
        return state.searchPizza.searchPizza;
    });

    const [activeTag, setActiveTag] = useState<TagType>(
        tagParam
            ? (tags.find(
                  (tag) =>
                      tag ===
                      tagParam.charAt(0).toUpperCase() + tagParam.slice(1),
              ) as TagType)
            : "All",
    );
    const [pizzas, setPizzas] = useState<IPizza[] | null>([]);
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
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        router.push(
            `?tag=${activeTag.toLocaleLowerCase()}&page=${activePage}&sortBy=${
                activeSortVariant.value
            }`,
        );

        setIsLoading(true);

        try {
            getAllPizzas(
                activeTag,
                activePage,
                activeSortVariant.value,
                searchPizza,
            ).then((data) => {
                console.log(data);
                if (data.success) {
                    setIsLoading(false);

                    if (data.data.length === 0) {
                        setPizzas(null);
                    } else {
                        setPizzas(data.data);
                    }
                }
            });
        } catch (error) {
            console.log(error);

            setIsLoading(false);
            setPizzas(null);
        }
    }, [activePage, activeTag, activeSortVariant, searchPizza]);

    const returnContent = () => {
        if (isLoading) {
            return <h3 className={styles.pizzas}>Loading...</h3>;
        }
        if (pizzas === null) {
            return <h3 className={styles.pizzas}>Nothing found...</h3>;
        }
        return (
            <div className={styles.pizzas}>
                {pizzas.map((pizza) => (
                    <Pizza {...pizza} key={pizza._id} />
                ))}
            </div>
        );
    };

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
                {/* {returnContent()} */}
                <Pagination
                    activePage={activePage}
                    setActivePage={setActivePage}
                />
            </section>
        </>
    );
};
