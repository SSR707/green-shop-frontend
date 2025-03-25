"use client";
import { useState } from "react";
import { StatusItem } from "./status-item";

export const Status = () => {
  const [type, setType] = useState<string[]>([
    "All Plants",
    "New Arrivals",
    "Sale",
  ]);
  const [isActive, setIsActive] = useState<number | null>(0);
  return (
    <div className=" flex items-center gap-[37px]">
      {type.map((item, index) => (
        <StatusItem
          key={index}
          text={item}
          isActive={index === isActive}
          onClick={() => setIsActive(index)}
        />
      ))}
    </div>
  );
};
