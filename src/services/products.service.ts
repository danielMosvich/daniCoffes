import { CONFIG } from "../config";
import type { IProduct } from "../types/Product";
const API_URL = `${CONFIG.API_URL}/${CONFIG.ENDPOINTS.PRODUCTOS}`;

export const fetchProducts = async (
  idcategoria?: number | null,
  limit?: number | null,
  signal?: AbortSignal,
): Promise<IProduct[]> => {
  const url = new URL(API_URL);
  if (idcategoria) {
    url.searchParams.set("idcategoria", idcategoria.toString());
  }
  if (limit) {
    url.searchParams.set("limit", limit.toString());
  }
  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener los productos: ${response.status} ${response.statusText}`,
    );
  }
  return (await response.json()) as IProduct[];
};
