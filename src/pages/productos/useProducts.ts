import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/products.service";

export const useProducts = ({
  category_id = null,
  limit = null,
}: {
  category_id?: number | null;
  limit?: number | null;
} = {}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products", category_id],
    queryFn: () => fetchProducts(category_id, limit),
  });
  return {
    data: Array.isArray(data) ? data : [],
    isLoading: isLoading,
    error: error ? error.message : null,
    hasProducts: Array.isArray(data) && data.length > 0,
  };
};
