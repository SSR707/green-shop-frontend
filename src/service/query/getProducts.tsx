import { useQuery } from "@tanstack/react-query";

const baseUrl = process.env.BASE_URL;
interface ITypeProp {
  page?: number;
  limit?: number;
  filter?: any;
}

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
export const getProductsFetch = async ({ page, limit, filter }: ITypeProp):Promise<ProductResponse> => {
    const filterParam = filter ? encodeURIComponent(JSON.stringify(filter)) : "";

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

export const getProducts = ({ page, limit, filter }: ITypeProp) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsFetch({ page, limit, filter }),
  });
};