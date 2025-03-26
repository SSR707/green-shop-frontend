import Blogs from "../../../../../public/svg/blogs.svg";
import NextIcon from "../../../../../public/svg/next-icon-link.svg";

export const BlogCard = () => {
  return (
    <div>
      <div className="w-[268px] h-[195px]">
        <img className="w-full h-full object-cover" src={Blogs.src} alt="" />
      </div>
      <div className="px-[13px] pt-[9px] pb-[12px]">
        <p className="font-semibold text-[14px] leading-[114%] text-[var(--primary)]">
          September 12 I Read in 6 minutes
        </p>
        <h3 className="font-bold text-[20px] leading-[138%] text-[#3d3d3d] max-w-[189px] mt-[4px]">
          Cactus & Succulent Care Tips
        </h3>
        <p className="font-normal text-[14px] leading-[157%] text-[#727272] max-w-[242px] mt-[4px]">
          Cacti are succulents are easy care plants for any home or patio.
        </p>
        <p className="flex items-center gap-[3px] font-semibold text-[14px] leading-[114%] text-[#3d3d3d] mt-[9px]">
          Read More <img src={NextIcon.src} alt="" />
        </p>
      </div>
    </div>
  );
};
