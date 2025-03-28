"use client";
import { RootState } from "@/store/store";
import HeaderCart from "../../../public/svg/header-cart.svg";
import { useSelector } from "react-redux";

const HeaderCartBtn = () => {
  const productCount = useSelector(
    (state: RootState) => state.product.productCount
  );
  return (
    <button className=" relative cursor-pointer">
      <img src={HeaderCart.src} alt="" />
      {productCount ? (
        <div className=" absolute top-[-2px] right-[-6px] px-[5px] bg-[var(--primary)] rounded-[100%] text-[10px] font-medium text-[#fff]">
          {productCount}
        </div>
      ) : null}
    </button>
  );
};
export default HeaderCartBtn;
