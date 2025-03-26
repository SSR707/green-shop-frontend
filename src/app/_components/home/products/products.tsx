"use client";
import { useState } from "react";
import Fillter from "../../fillter/fillter";
import { ProductCard } from "./product-card";
import { getProducts } from "@/service/query/getProducts";
import { StatusItem } from "../category/status-item";

export interface IQuery {
  category_id?: string;
  type?: string;
  size?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface IState {
  page?: number;
  limit?: number;
  query?: IQuery;
}

export const Products = () => {
  const [type, setType] = useState<string[]>([
    "All Plants",
    "New Arrivals",
    "Sale",
  ]);
  const [isActiveStatus, setIsActiveStatus] = useState<number | null>(0);
  const [filter, setFilter] = useState<IState | null>(null);
  const filterFn = (filter: IQuery) => {
    setFilter((prev) => ({
      ...prev,
      query: { ...prev?.query, ...filter },
    }));
  };
  const { data } = getProducts(filter ?? { page: 1, limit: 9, query: {} });
  return (
    <>
      <Fillter filterFn={(filter: IQuery) => filterFn(filter)} />
      <div className="w-[70%]">
        <div className=" items-center flex justify-between">
          <div className=" flex items-center gap-[37px]">
            {type.map((item, index) => (
              <StatusItem
                key={index}
                text={item}
                isActive={index === isActiveStatus}
                onClick={() => (
                  setIsActiveStatus(index),
                  filterFn({
                    type:
                      item === "All Plants"
                        ? undefined
                        : item === "New Arrivals"
                        ? "new"
                        : "sale",
                  })
                )}
              />
            ))}
          </div>
          <p>Short by:Default sorting</p>
        </div>
        <div className="pt-[30px]">
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
        </div>
      </div>
    </>
  );
};
