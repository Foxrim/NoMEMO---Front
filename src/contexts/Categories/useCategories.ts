import { useContext } from "react"
import { CategoriesContext } from "./Categories.context"

export const useCategories = () => {
    const context = useContext(CategoriesContext)
    if (!context) {
        throw new Error("useCategories doit être utilisé avec CategoriesProvider");
    }
    return context;
}