import { createContext } from "react"

type ColorsProps = {
    nameColor: string;
    fontColor: string;
    backgroundColor: string[];
}

type CategoryProps = {
    nameCategory: string;
    color: ColorsProps;
}

export type NotesProps = {
    id?: number;
    nameNotes?: string;
    comment?: string;
    link?: string;
    status?: string;
    createdAt?: string;
    updateAt?: string;
    category?: CategoryProps;
}

type NotesContextProps = {
    notes: NotesProps[];
    fetchNotes: () => void;
}

export const NotesContext = createContext<NotesContextProps | undefined>(undefined);