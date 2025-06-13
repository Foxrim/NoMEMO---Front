import { createContext } from "react";

interface ColorsProps {
  fontColor: string;
  backgroundColor: string;
}

interface CategoriesProps {
  id: number;
  nameCategory: string;
  colors: ColorsProps;
}

export type NotesProps = {
  id: number;
  nameNote: string;
  comment: string;
  link: string;
  isDone: 'done' | 'notDone';
  createdAt: Date;
  categoryId: number;
  categories: CategoriesProps;
}

type NotesContextProps = {
    notes: NotesProps[];
    fetchNotes: () => void;
}

export const NotesContext = createContext<NotesContextProps | undefined>(undefined);