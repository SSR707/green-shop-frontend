import { Button } from "@/components/ui/button";
import InfoImg from "../../../../../public/svg/ingo.svg";
import NextIcon from "../../../../../public/svg/next-icon-btn.svg";
export const InfoCard = () => {
  return (
    <div className="flex items-center ">
      <div className="w-[292px] h-[292px]">
        <img className="w-full h-full object-cover" src={InfoImg.src} alt="" />
      </div>
      <div className="flex flex-col items-end ">
        {" "}
        <h2 className="font-black text-[18px] leading-[133%] uppercase text-right text-[#3d3d3d] max-w-[150px]">
          Summer cactus & succulents
        </h2>
        <p className="font-normal text-[14px] leading-[171%]  text-right text-[#3d3d3d] max-w-[292px] mt-[9px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants
        </p>
        <Button
          variant="primary"
          className="text-[14px] leading-[143%] mt-[25px]"
          endIcon={NextIcon.src}
        >
          Find More
        </Button>
      </div>
    </div>
  );
};
