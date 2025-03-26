import { Location } from "@/components/location/location";
import ProducImg from "../../../../public/svg/product-img.svg";
import SearchIcon from "../../../../public/svg/header-search.svg";
import RatingImg from "../../../../public/svg/reating.svg";

interface PageProps {
  params: { id: string };
}
const Product = ({ params }: PageProps) => {
  return (
    <section className="pb-[150px]">
      <div className="container">
        <Location />
        <div className="pt-[43px] flex gap-[50px]">
          <div className=" relative flex gap-[46px] items-center w-[46%]">
            <div className=" absolute w-[18px] h-[18px] top-0 right-0 ">
              <img
                className="w-full h-full object-cover"
                src={SearchIcon.src}
                alt=""
              />
            </div>
            <div>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className=" w-[100px] h-[100px] ">
                  <img
                    className="w-full h-full object-cover"
                    src={ProducImg.src}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="w-[404] h-[404] ">
              <img
                className="h-full w-full object-cover"
                src={ProducImg.src}
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%]">
            <div className="border-b-1 border-[#A2D0AB] pb-[13px]">
              <h3 className="font-bold text-[28px] leading-[57%] text-[#3d3d3d]">
                Barberton Daisy
              </h3>
              <div className="mt-[21px] flex justify-between w-full items-center ">
                <p className="font-bold text-[22px] leading-[73%] text-[var(--primary)]">
                  $119.00
                </p>
                <div className="flex gap-[11px]">
                  <img src={RatingImg.src} alt="" />
                  <p className="font-normal text-[15px] text-[#3d3d3d] max-w-[141px]">
                    19 Customer Review
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[15px]">
              <p className="font-semibold text-[15px] text-[#3d3d3d]">
                Short Description:
              </p>
              <p className="font-normal text-[14px] text-[#727272] mt-[10px]">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
