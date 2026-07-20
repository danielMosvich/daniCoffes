import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router"; // or react-router-dom depending on their version
import { fetchBrands } from "../../services/brands.service";
import { useEffect } from "react";

export const useBrands = () => {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  
  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ["brands", queryString],
    queryFn: async ({ signal }) => fetchBrands(queryString, signal),
    placeholderData: (previousData) => previousData,
  });

  const brands = data?.data || [];
  const paginationInfo = data?.pagination;

  useEffect(() => {
    console.log("useBrands data:", data);
  }, [data]);

  return {
    brands,
    pagination: paginationInfo,
    isLoading,
    error: error ? error.message : null,
    hasBrands: Array.isArray(brands) && brands.length > 0,
    isPlaceholderData,
  };
};
