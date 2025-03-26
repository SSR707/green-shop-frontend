import { useQuery } from "@tanstack/react-query";

interface Category {
  id: string;
  created_at: string;
  updated_at: string;
  picture: string;
  name: string;
  description: string;
  tag: string;
  products: Product[];
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
  data: Category[];
}
export const getCategoryFetch = async (): Promise<ProductResponse> => {
  const res = await fetch(
    `http://13.233.2.40:3133/api/v1/category
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
