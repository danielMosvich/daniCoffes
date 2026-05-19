export const CONFIG = {
  API_URL: import.meta.env.VITE_API_URL,
  ENDPOINTS: {
    PRODUCTOS: "products.php",
    CATEGORIES: "categories.php",
  },
  VERSION: "1.0.0",
} as const;
