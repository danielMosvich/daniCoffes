import { useQuery } from "@tanstack/react-query";
import { fetchProductDetail } from "../../services/products.service";

export const useProductDetail = (idproduct?: string | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", idproduct],
    queryFn: ({ signal }) => fetchProductDetail(idproduct, signal),
  });
  if (data) {
    console.log(data[0]);
  }
  return {
    data: Array.isArray(data) ? data[0] : null,
    isLoading: isLoading,
    error: error ? error.message : null,
    hasProduct: Array.isArray(data) && data.length > 0,
  };
};
