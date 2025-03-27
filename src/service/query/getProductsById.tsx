import { ProductResponseById } from "@/utils/type/product-type";
import { useQuery } from "@tanstack/react-query";

const baseUrl = process.env.BASE_URL;

export const getProductsByIdFetch = async (
  id: string |undefined
): Promise<ProductResponseById> => {
  const res = await fetch(`http://13.233.2.40:3133/api/v1/product/${id}`);
  if (!res.ok) {
    throw new Error("Error Fatching");
  }
  return res.json();
};

export const getProductsById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductsByIdFetch(id),
  });
};
