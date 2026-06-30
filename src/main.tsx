import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./context/AuthProvider.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import PublicRoute from "./components/PublicRoute";

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
      {
        element: <PublicRoute />,
        children: [
          {
            path: "login",
            lazy: async () => {
              return {
                Component: (await import("./pages/login/index.tsx")).default,
              };
            },
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            lazy: async () => {
              return {
                Component: (await import("./pages/profile/index.tsx")).default,
              };
            },
          },
          {
            path: "reservations",
            lazy: async () => {
              return {
                Component: (await import("./pages/reservations/index.tsx"))
                  .default,
              };
            },
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
