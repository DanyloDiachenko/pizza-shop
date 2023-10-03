import { ISortVariant } from "./sortVariant.interface";

export interface SortByProps {
    sortVariants: ISortVariant[];
    activeSortVariant: ISortVariant;
    setActiveSortVariant: (sortVariant: ISortVariant) => void;
}
