"use client";
import KarzinkaIcon from "../../../../public/svg/karzinka.svg";
import { useDispatch } from "react-redux";
import { deleteProductCart, toggalAmount } from "@/store/reducer/cart-reducer";

export const OrderCard = ({
  img,
  title,
  price,
  discount,
  count,
}: {
  id: string;
  img: string;
  title: string;
  price: string;
  discount: string | null;
  count: number;
}) => {
  const numericPrice = Number(price) || 0;
  const numericDiscount = Number(discount) || 0;
  return (
    <div className="mt-[11px] flex bg-[#fbfbfb] items-center gap-[50px]">
      <div className="flex gap-[14px] items-center">
        <div className="w-[70px] h-[70px]">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className=" overflow-hidden">
          <h3 className="font-semibold text-[16px] leading-[100%] text-[#3d3d3d] w-[130px] overflow-hidden truncate">
            {title}
          </h3>
          <p className="font-normal text-[15px] text-[#a5a5a5] leading-[107%] mt-[6px] w-[150px] truncate">
            SKU: <span className="text-[#727272]">1995751877966</span>
          </p>
        </div>
      </div>
      <div className="flex gap-[30px] items-center">
        <p className="font-medium text-[16px] leading-[100%] text-[#a5a5a5]">
          {`(x${count})`}
        </p>

        <div className="flex items-center">
          <p className="font-bold text-[17px] leading-[100%] text-[var(--primary)]">
            $
            {numericDiscount
              ? (
                  (numericPrice - (numericPrice * numericDiscount) / 100) *
                  count
                ).toFixed(2)
              : (numericPrice * count).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
