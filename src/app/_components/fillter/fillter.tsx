import { Button } from "@/components/ui/button";
import PriceRange from "../home/category/price-range";
import BannerSale from "../../../../public/svg/Super Sale Banner.png";
import { IQuery } from "../home/products/products";
import { useState } from "react";
import { getCategory } from "@/service/query/getCategorys";
import { CategoryList } from "../home/category/category-list";
import LoadingSpinner from "@/components/loading/loading";

const Fillter = ({ filterFn }: { filterFn: (query: IQuery) => void }) => {
  const [isActiveCategory, setIsActiveCtegory] = useState<number | null>(null);
  const [isActiveSize, setIsActiveSize] = useState<number | null>(null);
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();
  const RangeFn = (range: number[]) => {
    console.log(range);
    setMin(range[0]);
    setMax(range[1]);
  };
  const [categorySize, setCategorySize] = useState<string[]>([
    "Small",
    "Medium ",
    "Large",
  ]);
  const [categorySizeCount, setCategorySizeCount] = useState<number[]>([
    33, 44, 53,
  ]);
  const { data, isLoading } = getCategory();
  return (
    <>
      <div className="w-[26%]">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {" "}
            <div className=" px-[18px] pt-[14px] w-[100%] bg-[var(--bg)] pb-[19px]">
              <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d] mb-[15px]">
                Category
              </h3>
              <div className=" pl-[12px] flex flex-col gap-y-[20px]">
                {data?.data.map((item, index) => (
                  <CategoryList
                    key={item.id}
                    text={item.name}
                    count={item.products.length}
                    isActive={isActiveCategory === index}
                    onClick={() => {
                      setIsActiveCtegory(index),
                        filterFn({ category_id: item.id });
                    }}
                  />
                ))}
              </div>
              <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d] mt-[36px]">
                Price Range
              </h3>
              <PriceRange rangeFn={(range) => RangeFn(range)} />
              <div className="pl-[12px] mt-[16px]">
                {" "}
                <Button
                  onClick={() => filterFn({ minPrice: min, maxPrice: max })}
                  variant="utility"
                  className="font-bold text-[16px] leading-[125%] "
                >
                  Filter
                </Button>
                <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d] mb-[15px] mt-[46px]">
                  Size
                </h3>
                <div className=" pl-[12px] flex flex-col gap-y-[20px]">
                  {categorySize.map((item, index) => (
                    <CategoryList
                      key={index}
                      text={item}
                      count={categorySizeCount[index]}
                      isActive={isActiveSize === index}
                      onClick={() => {
                        setIsActiveSize(index),
                          filterFn({ size: item.toLowerCase() });
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[315px] h-[470px]">
              <img
                className="w-full h-full object-cover"
                src={BannerSale.src}
                alt=""
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Fillter;
