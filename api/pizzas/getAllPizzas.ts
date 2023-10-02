import { PageType } from "@/types/page.type";
import { TagType } from "@/types/tag.type";

export const getAllPizzas = async (
    tag: TagType,
    page: PageType,
    //@ts-ignore
    sortBy?: string,
) => {
    return fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL +
            `/pizzas?tag=${tag.toLocaleLowerCase()}&pageNumber=${page}`,
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
