import { PageType } from "@/types/page.type";
import { SortByType } from "@/types/sortBy.type";
import { TagType } from "@/types/tag.type";

export const getAllPizzas = async (
    tag: TagType,
    page: PageType,
    sortBy: SortByType,
) => {
    return fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL +
            `/pizzas?tag=${tag.toLocaleLowerCase()}&pageNumber=${page}&sortBy=${sortBy}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    )
        .then((response) => {
            return response.json();
        })
        .catch((e) => {
            return e;
        });
};
