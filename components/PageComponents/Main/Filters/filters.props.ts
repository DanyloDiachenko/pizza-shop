import { SortByProps } from "./SortBy/sortBy.props";
import { TagsProps } from "./Tags/tags.props";

export interface FiltersProps {
    activeTag: TagsProps["activeTag"];
    setActiveTag: TagsProps["setActiveTag"];
    tags: TagsProps["tags"];
    sortVariants: SortByProps["sortVariants"];
    activeSortVariant: SortByProps["activeSortVariant"];
    setActiveSortVariant: SortByProps["setActiveSortVariant"];
}
