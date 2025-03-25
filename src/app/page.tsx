import Swipper from "./_components/home/hero/swipper";
import { Catgory } from "./_components/home/category/catgory";
import PriceRange from "./_components/home/category/price-range";
import { Button } from "@/components/ui/button";
import { Status } from "./_components/home/category/status";
import { ProductCard } from "./_components/home/products/product-card";
import { Products } from "./_components/home/products/products";
import { InfoCard } from "./_components/home/info/info-card";

export default function Home() {
  return (
    <main>
      <div className="container">
        <section className="">
          <div className="pt-[18px]">
            <Swipper />
          </div>
        </section>
        <section className="py-[30px] flex gap-[50px]">
          {" "}
          <div className="px-[18px] pt-[14px] w-[26%] bg-[var(--bg)]">
            <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d] mb-[15px]">
              Category
            </h3>
            <Catgory type="category" />
            <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d] mt-[36px]">
              Price Range
            </h3>
            <PriceRange />
            <div className="pl-[12px] mt-[16px]">
              {" "}
              <Button
                variant="utility"
                className="font-bold text-[16px] leading-[125%] "
              >
                Filter
              </Button>
              <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d] mb-[15px] mt-[46px]">
                Size
              </h3>
              <Catgory type="size" />
            </div>
          </div>
          <div className="w-[70%]">
            <div className=" items-center flex justify-between">
              <Status />
              <p>Short by:Default sorting</p>
            </div>
            <div className="pt-[30px]">
              <Products />
            </div>
          </div>
        </section>
        <section className="pt-[94px]">
          <div className="flex gap-[28px]">
            <InfoCard />
            <InfoCard />
          </div>
        </section>
        <section className="pt-[130px]">
          <div className=" text-center">
            <h3 className="font-bold text-[30px] leading-[53%] text-[#3d3d3d] mb-[15px]">
              Our Blog Posts
            </h3>
            <p className="font-normal text-[14px] leading-[171%] text-[#3d3d3d]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
