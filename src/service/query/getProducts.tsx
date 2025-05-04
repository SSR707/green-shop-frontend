import { IState } from "@/app/_components/home/products/products";
import { Product } from "@/utils/type/product-type";
import { useQuery } from "@tanstack/react-query";

const baseUrl = process.env.BASE_URL;


export interface ProductResponse {
  status_code: 200;
  message: "success";
  data: {
    products: Product[];
    productCount: number;
  };
}
export const getProductsFetch = async ({
  page,
  limit,
  query,
}: IState): Promise<ProductResponse> => {
  const filterParam = query ? encodeURIComponent(JSON.stringify(query)) : "";

  const res = await fetch(
    `http://13.201.9.21:3133/api/v1/product?page=${page}&limit=${limit}${
      filterParam ? `&filter=${filterParam}` : ""
    }`
  );
  if (!res.ok) {
    throw new Error("Error Fatching");
  }
  return res.json();
};

export const getProducts = ({ page = 1, limit = 36, query }: IState) => {
  return useQuery({
    queryKey: ["products", page, limit, query],
    queryFn: () => getProductsFetch({ page, limit, query }),
  });
};
