"use client";
import { useState } from "react";
import { CategoryList } from "./category-list";

export const Catgory = ({type} : {type: 'category' |  'size'}) => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [categoryType, setCategoryType] = useState<string[]>([
    "House Plants",
    "Potter Plants",
    "Seeds",
    " Small Plants",
    " Big Plants",
    "Succulents",
    " Trerrariums",
    "Gardening ",
    "Accessories",
  ]);
  const [categoryCount, setCategoryCount] = useState<number[]>([
    33, 44, 53, 56, 95, 41, 21, 51, 75,
  ]);

  const [categorySize, setCategorySize] = useState<string[]>([
    "Small ","Medium ","Large"
  ]);
  const [categorySizeCount, setCategorySizeCount] = useState<number[]>([
    33, 44, 53
  ]);
  return (
    <div className=" pl-[12px] flex flex-col gap-y-[20px]">
      {type === "category" ? categoryType.map((item, index) => (
        <CategoryList
          key={index}
          text={item}
          count={categoryCount[index]}
          isActive={isActive === index}
          onClick={() => setIsActive(index)}
        />
      )):categorySize.map((item, index) => (
        <CategoryList
          key={index}
          text={item}
          count={categorySizeCount[index]}
          isActive={isActive === index}
          onClick={() => setIsActive(index)}
        />
      )) }
    </div>
  );
};
