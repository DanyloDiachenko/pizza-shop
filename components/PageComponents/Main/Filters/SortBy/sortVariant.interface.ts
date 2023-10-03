import { SortByType } from "@/types/sortBy.type";

export interface ISortVariant {
    title:
        | "rating"
        | "price (desc)"
        | "price (asc)"
        | "alphabet (desc)"
        | "alphabet (asc)";
    value: SortByType;
}
