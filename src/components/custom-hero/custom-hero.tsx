import Img from "../../../public/svg/hero-img.png";
import { Button } from "../ui/button";
const CustomHero = () => {
  return (
    <div className="flex justify-between">
      <div className="px-[40px] py-[62px]">
        <p className=" font-medium text-[14px] leading-[114%] text-[#3d3d3d] uppercase">
          Welcome to GreenShop
        </p>
        <h1 className=" w-[530px] font-black text-[70px] leading-[100%] text-[#3d3d3d] uppercase">
          Let’s Make a Better{" "}
          <span className="text-[var(--primary)]">Planet</span>
        </h1>
        <p className="w-[557px] font-medium text-[14px] leading-[114%] text-[#727272] mt-[5px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <Button
          variant='primary'
          className="font-bold leading-[125%] text-[16px] uppercase mt-[44px] "
        >
          SHOP NOW
        </Button>
      </div>
      <div className="w-[518px] h-[470px] relative">
        <img
          className="absolute top-[-15px]  w-full h-full object-cover  "
          src={Img.src}
          alt=""
        />
      </div>
    </div>
  );
};

export default CustomHero;
