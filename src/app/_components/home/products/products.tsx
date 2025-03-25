"use client";
import { ProductCard } from "./product-card";
import ProductImg from "../../../../../public/svg/product-img.svg";
import { useState } from "react";

const data = [
  {
    id: 1,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
  },
  {
    id: 2,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
    oldPrice: 200.0,
    discount: 20,
  },
  {
    id: 3,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
  },
  {
    id: 4,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
    oldPrice: 200.0,
    discount: 20,
  },
  {
    id: 5,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
  },
  {
    id: 6,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
  },
  {
    id: 7,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
    oldPrice: 200.0,
    discount: 20,
  },
  {
    id: 8,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
    oldPrice: 200.0,
    discount: 20,
  },
  {
    id: 9,
    img: ProductImg,
    title: "Angel Wing Begonia",
    price: 199.0,
  },
];

export const Products = () => {
  const [isActive, setIsActive] = useState<number | null>(null);
  return (
    <div className=" grid grid-cols-3 gap-x-[33px] gap-y-[70px]">
      {data.map((item, index) => (
        <ProductCard
          key={item.id}
          id={item.id}
          img={item.img.src}
          title={item.title}
          price={item.price}
          discount={item.discount}
          oldPrice={item.oldPrice}
          isActive={item.id === isActive}
          onClick={() => setIsActive(item.id)}
        />
      ))}
    </div>
  );
};
