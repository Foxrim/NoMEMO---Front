import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router, rootElement } from './router.tsx';
import { RouterProvider } from 'react-router';
import './index.css'

if (rootElement == null) {
    throw new Error(`La route utilisé n'est pas correcte`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
