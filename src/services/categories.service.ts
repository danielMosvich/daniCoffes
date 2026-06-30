import { CONFIG } from "../config";
import type { ICategory } from "../types/Categories";
const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.CATEGORIES}`;

export const fetchCategories = async (
  signal?: AbortSignal,
): Promise<ICategory[]> => {
  const url = new URL(API_URL);
  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener los productos: ${response.status} ${response.statusText}`,
    );
  }
  return (await response.json()) as ICategory[];
};
