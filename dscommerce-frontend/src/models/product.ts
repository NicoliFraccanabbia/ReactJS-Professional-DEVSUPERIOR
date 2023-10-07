import { CategoryDTO } from "./category";

export type ProductDTO= {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    categories: CategoryDTO[];
}