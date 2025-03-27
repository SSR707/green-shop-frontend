import { Product } from "./product-type";

export interface Category {
  id: string;
  created_at: string;
  updated_at: string;
  picture: string;
  name: string;
  description: string;
  tag: string;
  products: Product[];
}


export interface CategoryResponse {
  status_code: 200;
  message: "success";
  data: Category[];
}