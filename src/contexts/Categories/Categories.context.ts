import { createContext } from "react";

type ColorsProps = {
    nameColor: string;
    fontColor: string;
    backgroundColor: string[];
}

export type CategoriesProps = {
    id: number;
    nameCategory?: string;
    createdAt?: string;
    updatedAt?: string;
    color?: ColorsProps;
}

type CategoriesContextProps = {
    fetchCategories: () => void;
    categories: CategoriesProps[];
}

export const CategoriesContext = createContext<CategoriesContextProps | undefined>(undefined);
