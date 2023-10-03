import { PageType } from "@/types/page.type";

export interface PaginationProps {
    activePage: PageType;
    setActivePage: (page: PageType) => void;
}
