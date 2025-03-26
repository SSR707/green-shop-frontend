"use client";
import { useState } from "react";
import { CategoryList } from "./category-list";

export const Size = () => {
  const [isActive, setIsActive] = useState<number | null>(null);

  const [categorySize, setCategorySize] = useState<string[]>([
    "Small ",
    "Medium ",
    "Large",
  ]);
  const [categorySizeCount, setCategorySizeCount] = useState<number[]>([
    33, 44, 53,
  ]);
  return (
    <div className=" pl-[12px] flex flex-col gap-y-[20px]">
      {categorySize.map((item, index) => (
        <CategoryList
          key={index}
          text={item}
          count={categorySizeCount[index]}
          isActive={isActive === index}
          onClick={() => setIsActive(index)}
        />
      ))}
    </div>
  );
};
