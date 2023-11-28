import { PageType } from "@/types/page.type";
import styles from "./pagination.module.scss";
import { PaginationProps } from "./pagination.props";

export const Pagination = ({
    activePage,
    setActivePage,
}: PaginationProps): JSX.Element => {
    const pages: PageType[] = [1, 2, 3];

    return (
        <div className={styles.pagination}>
            <button
                onClick={() =>
                    setActivePage(
                        activePage !== 1 ? ((activePage - 1) as PageType) : 1,
                    )
                }
                className={activePage === 1 ? styles.inactive : ""}
                disabled={activePage === 1}
                aria-label="Previous page"
            >
                {"<"}
            </button>
            {pages.map((page) => (
                <button
                    className={page === activePage ? styles.active : ""}
                    key={page}
                    onClick={() => setActivePage(page)}
                    aria-label={`Go to ${page} page`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() =>
                    setActivePage(
                        activePage !== 3 ? ((activePage + 1) as PageType) : 3,
                    )
                }
                className={activePage === 3 ? styles.inactive : ""}
                disabled={activePage === 3}
                aria-label="Next page"
            >
                {">"}
            </button>
        </div>
    );
};
