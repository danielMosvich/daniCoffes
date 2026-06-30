export const CONFIG = {
  API_URL: import.meta.env.VITE_API_URL,
  ENDPOINTS: {
    PRODUCTOS: "/products.php",
    CATEGORIES: "/categories.php",
    LOGIN: "/login.php",
    RESERVATIONS: "/reservations.php",
    RESERVATIONS_INSERT: "/reservationsinsert.php",
    RESERVATIONS_UPDATE: "/reservationsupdate.php",
    RESERVATIONS_DELETE: "/reservationsdelete.php",
  },
  VERSION: "1.0.0",
} as const;
