import { CONFIG } from "../config";
import type { IBrandsResponse } from "../types/Brand";
const API_URL = `${CONFIG.API_URL}${CONFIG.ENDPOINTS.BRANDS}`;

export const fetchBrands = async (
  queryString: string,
  signal?: AbortSignal,
): Promise<IBrandsResponse> => {
  const urlConParametros = queryString ? `${API_URL}?${queryString}` : API_URL;
  const response = await fetch(urlConParametros, { signal });
  if (!response.ok) {
    throw new Error(
      `Error al obtener marcas: ${response.status} ${response.statusText}`,
    );
  }
  return response.json();
};
