"use client";
import { ProductCard } from "./product-card";
import { getProducts } from "@/service/query/getProducts";

export const Products = () => {

  const { data } = getProducts({ page: 1, limit: 9 });
  return (
    <div className=" grid grid-cols-3 gap-x-[33px] gap-y-[70px]">
      {data?.data?.products?.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          img={item.picture}
          title={item.title}
          price={item.price}
          discount={item.discount_value}
        />
      ))}
    </div>
  );
};
