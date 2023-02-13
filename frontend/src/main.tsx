import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Time from './pages/Time';
import Times from "./pages/Times";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Times />,
  },
  {
    path: "/time",
    element: <Time />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
