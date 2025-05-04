import { CategoryResponse } from "@/utils/type/category-type";
import { useQuery } from "@tanstack/react-query";

export const getCategoryFetch = async (): Promise<CategoryResponse> => {
  const res = await fetch(
    `http://13.201.9.21:3133/api/v1/category
      `
  );
  if (!res.ok) {
    throw new Error("Error Fatching");
  }
  return res.json();
};

export const getCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoryFetch(),
  });
};
