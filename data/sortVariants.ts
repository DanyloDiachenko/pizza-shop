import { ISortVariant } from "@/components/PageComponents/Main/Filters/SortBy/sortVariant.interface";

export const sortVariants: ISortVariant[] = [
    {
        title: "rating",
        value: "rating",
    },
    {
        title: "alphabet (asc)",
        value: "alphabetAsc",
    },
    {
        title: "alphabet (desc)",
        value: "alphabetDesc",
    },
    {
        title: "price (asc)",
        value: "priceAsc",
    },
    {
        title: "price (desc)",
        value: "priceDesc",
    },
];
