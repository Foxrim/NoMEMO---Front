import { createContext } from "react"

type ColorsProps = {
    nameColor: string;
    fontColor: string;
    backgroundColor: string[];
}

type CategoryProps = {
    nameCategory?: string;
    color?: ColorsProps;
}

export type NotesProps = {
    id?: number;
    nameNote?: string;
    comment?: string;
    link?: string;
    categoryId?: number;
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
// Unexpected Application Error!
// Cannot read properties of undefined (reading 'nameCategory')
// TypeError: Cannot read properties of undefined (reading 'nameCategory')
//     at http://localhost:5173/src/components/Notes%20Container/hook/formNotes.ts:48:51
//     at react-stack-bottom-frame (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:17476:20)
//     at runWithFiberInDEV (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:1483:72)
//     at commitHookEffectListMount (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:8458:122)
//     at commitHookPassiveMountEffects (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:8516:60)
//     at reconnectPassiveEffects (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:10014:13)
//     at recursivelyTraverseReconnectPassiveEffects (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:9993:11)
//     at reconnectPassiveEffects (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:10052:13)
//     at recursivelyTraverseReconnectPassiveEffects (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:9993:11)
//     at reconnectPassiveEffects (http://localhost:5173/node_modules/.vite/deps/react-dom_client.js?v=727b3691:10007:13)
// 💿 Hey developer 👋

// You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.