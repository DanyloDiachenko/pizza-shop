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
            <div
                onClick={() =>
                    setActivePage(
                        activePage !== 1 ? ((activePage - 1) as PageType) : 1,
                    )
                }
            >
                {"<"}
            </div>
            {pages.map((page) => (
                <div
                    className={page === activePage ? styles.active : ""}
                    key={page}
                    onClick={() => setActivePage(page)}
                >
                    {page}
                </div>
            ))}
            <div
                onClick={() =>
                    setActivePage(
                        activePage !== 3 ? ((activePage + 1) as PageType) : 3,
                    )
                }
            >
                {">"}
            </div>
        </div>
    );
};
