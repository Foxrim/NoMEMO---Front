import { createContext } from "react";

interface ColorsProps {
  fontColor?: string;
  backgroundColor?: string;
}

interface CategoriesProps {
  id?: number;
  nameCategory?: string;
  colors?: ColorsProps;
}

interface DoneProps {
  done?: string;
  notDone: string;
}

export type NotesProps = {
  nameNote: string;
  comment?: string;
  link?: string;
  isDone: DoneProps;
  createdAt: Date;
  categoryId?: number;
  categories?: CategoriesProps;
}

type NotesContextProps = {
    notes: NotesProps[];
    fetchNotes: () => void;
}

export const NotesContext = createContext<NotesContextProps | undefined>(undefined);