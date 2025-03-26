import Swipper from "./_components/home/hero/swipper";
import { Category } from "./_components/home/category/catgory";
import PriceRange from "./_components/home/category/price-range";
import { Button } from "@/components/ui/button";
import { Status } from "./_components/home/category/status";
import { InfoCard } from "./_components/home/info/info-card";
import { BlogCard } from "./_components/home/blog/blog-card";
import BannerSale from "../../public/svg/Super Sale Banner.png";
import ProductWrappers from "@/wrapers/product-wrappers";
import { Size } from "./_components/home/category/size";

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
          <div className="w-[26%]">
            <div className=" px-[18px] pt-[14px] w-[100%] bg-[var(--bg)] pb-[19px]">
              <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d] mb-[15px]">
                Category
              </h3>
              <Category  />
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
                <Size />
              </div>
            </div>
            <div className="w-[315px] h-[470px]">
              <img
                className="w-full h-full object-cover"
                src={BannerSale.src}
                alt=""
              />
            </div>
          </div>
          <div className="w-[70%]">
            <div className=" items-center flex justify-between">
              <Status />
              <p>Short by:Default sorting</p>
            </div>
            <div className="pt-[30px]">
              <ProductWrappers />
            </div>
          </div>
        </section>
        <section className="pt-[94px]">
          <div className="flex gap-[28px]">
            <InfoCard />
            <InfoCard />
          </div>
        </section>
        <section className="pt-[130px] pb-[100px]">
          <div className=" text-center">
            <h3 className="font-bold text-[30px] leading-[53%] text-[#3d3d3d] mb-[15px]">
              Our Blog Posts
            </h3>
            <p className="font-normal text-[14px] leading-[171%] text-[#3d3d3d]">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="mt-[35px] flex gap-[44px]">
            {Array.from({ length: 4 }).map((_, index) => (
              <BlogCard key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
