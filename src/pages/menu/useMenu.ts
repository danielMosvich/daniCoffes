import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/categories.service";

export const useMenu = () => {
  const [category_select, set_category_select] = useState<number | null>(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(),
  });
  return {
    data: Array.isArray(data) ? data : [],
    isLoading: isLoading,
    error: error ? error.message : null,
    hasProducts: Array.isArray(data) && data.length > 0,
    category_select,
    set_category_select,
  };
};
