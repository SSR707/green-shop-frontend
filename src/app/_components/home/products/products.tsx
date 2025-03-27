"use client";
import { useState } from "react";
import Fillter from "../../fillter/fillter";
import { ProductCard } from "./product-card";
import { getProducts } from "@/service/query/getProducts";
import { StatusItem } from "../category/status-item";
import { Paganation } from "@/components/paganation/paganation";
import LoadingSpinner from "@/components/loading/loading";

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
  const [isActivePage, setIsActivePage] = useState<number>(0);
  const [filter, setFilter] = useState<IState | null>(null);
  const filterFn = (filter: IQuery) => {
    setFilter((prev) => ({
      ...prev,
      query: { ...prev?.query, ...filter },
    }));
  };
  const { data, isLoading } = getProducts(
    filter ?? { page: 1, limit: 36, query: {} }
  );
  return (
    <>
      <div className="flex gap-[50px]">
        {" "}
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
            {isLoading ? (
              <LoadingSpinner />
            ) : data?.data.products.length === 0 ? (
              <div className=" flex  flex-col items-center justify-center mt-[30%]">
                <p className="text-4xl font-bold  text-[var(--primary)]">
                  NO DATA
                </p>
                <button
                  onClick={() => setFilter(null)}
                  className="text-[18px] px-[27px] py-[8px] rounded-[6px] mt-[10px] font-bold  text-[#fff] bg-[var(--primary)]"
                >
                  Rest
                </button>
              </div>
            ) : (
              <div className=" grid grid-cols-3 gap-x-[33px] gap-y-[70px]">
                {data?.data?.products
                  ?.slice(isActivePage * 9, isActivePage * 9 + 9)
                  .map((item) => (
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
            )}
          </div>
        </div>
      </div>
      <div className=" flex pt-[20px] justify-end gap-[10px]">
        {Array.from({
          length: data?.data.productCount
            ? Math.ceil(data?.data?.productCount / 9)
            : 1,
        }).map((_, index) => (
          <Paganation
            key={index}
            onClick={() => setIsActivePage(index)}
            isActive={index === isActivePage}
            page={index + 1}
            endChek={
              index >= 4
              // index < Math.ceil(data?.data?.productCount ?? 0 / 9) - 1
            }
            // startChek={isActivePage > 0}
          />
        ))}
      </div>
    </>
  );
};
