import { IState } from "@/app/_components/home/products/products";
import { useQuery } from "@tanstack/react-query";

const baseUrl = process.env.BASE_URL;

interface Category {
  id: string;
  created_at: string;
  updated_at: string;
  picture: string;
  name: string;
  description: string;
  tag: string;
}

interface Product {
  id: string;
  created_at: string;
  updated_at: string;
  category_id: string;
  title: string;
  picture: string;
  summary: string;
  description: string;
  price: string;
  discount_type: string | null;
  discount_value: string | null;
  tags: string;
  size: string;
  type: string;
  category: Category;
  reviews: any[];
}

interface ProductResponse {
  status_code: 200;
  message: "success";
  data: {
    products: Product[];
    productCount: number;
  };
}
export const getProductsFetch = async ({ page, limit, query }: IState):Promise<ProductResponse> => {
    const filterParam = query ? encodeURIComponent(JSON.stringify(query)) : "";

    const res = await fetch(
      `http://13.233.2.40:3133/api/v1/product?page=${page}&limit=${limit}${
        filterParam ? `&filter=${filterParam}` : ""
      }`
    );
  if (!res.ok) {
    throw new Error("Error Fatching");
  }
  return res.json();
};

export const getProducts = ({ page = 1, limit = 9, query }: IState  ) => {
  return useQuery({
    queryKey: ["products" , page , limit , query],
    queryFn: () => getProductsFetch({ page, limit, query }),
  });
};