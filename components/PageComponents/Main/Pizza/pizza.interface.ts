export interface IPizza {
    _id: string;
    rating: number;
    image: string;
    title: string;
    size26: {
        thin: number;
        standard: number;
    };
    size30: {
        thin: number;
        standard: number;
    };
    size40: {
        thin: number;
        standard: number;
    };
}
