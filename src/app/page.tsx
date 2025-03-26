import Swipper from "./_components/home/hero/swipper";
import { InfoCard } from "./_components/home/info/info-card";
import { BlogCard } from "./_components/home/blog/blog-card";
import ProductWrappers from "@/wrapers/product-wrappers";

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
          <ProductWrappers />
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
