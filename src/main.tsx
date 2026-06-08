import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        lazy: async () => {
          return { Component: (await import("./home/Home.tsx")).default };
        },
      },
      {
        path: "menu",
        lazy: async () => {
          return {
            Component: (await import("./pages/menu/index.tsx")).default,
          };
        },
      },
      {
        path: "*",
        lazy: async () => {
          return {
            Component: (await import("./pages/Pagina404.tsx")).default,
          };
        },
      },
      {
        path: "productodetalle/:idproducto",
        lazy: async () => {
          return {
            Component: (await import("./pages/productoDetail/index.tsx"))
              .default,
          };
        },
      },
      {
        path: "cart",
        lazy: async () => {
          return {
            Component: (await import("./pages/cart/index.tsx")).default,
          };
        },
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
