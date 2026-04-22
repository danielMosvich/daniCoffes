import type { IProductCoffee } from "../types/product";

export const getProducts = async (): Promise<IProductCoffee[]> => {
  try {
    const response = await fetch(
      "https://danicoffeegd.alwaysdata.net/products.php",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) throw new Error("Error en la petición");
    
    return await response.json();
  } catch (error) {
    console.error("Algo está mal con el servidor:", error);
    return [];
  }
};
