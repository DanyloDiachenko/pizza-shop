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
            `https://pizza-shop-api-ivory.vercel.app/api/pizzas?tag=${tag}&pageNumber=${page}`,
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
