"use client";
import ProductImg from "../../../../public/svg/product-img.svg";
import KarzinkaIcon from "../../../../public/svg/karzinka.svg";
import { useDispatch } from "react-redux";
import { deleteProductCart, toggalAmount } from "@/store/reducer/cart-reducer";
import { useEffect } from "react";

export const CartCard = ({
  id,
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
  const dispatch = useDispatch();
  const numericPrice = Number(price) || 0;
  const numericDiscount = Number(discount) || 0;
  useEffect(() => {
    if (count <= 0) {
      dispatch(deleteProductCart({ id }));
    }
  }, [count, id]);
  return (
    <div className="mt-[11px] flex bg-[#fbfbfb] items-center gap-[65px]">
      <div className="flex gap-[14px] items-center">
        {" "}
        <div className="w-[70px] h-[70px]">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className=" overflow-hidden">
          <h3 className="font-semibold text-[16px] leading-[100%] text-[#3d3d3d] w-[150px] overflow-hidden truncate">
            {title}
          </h3>
          <p className="font-normal text-[15px] text-[#a5a5a5] leading-[107%] mt-[6px] w-[150px] truncate">
            SKU: <span className="text-[#727272]">1995751877966</span>
          </p>
        </div>
      </div>
      <div className="flex gap-[76px] items-center mr-[26px]">
        <p className="font-semibold text-[16px] leading-[100%] text-[#a5a5a5]">
          $
          {numericDiscount
            ? (numericPrice - (numericPrice * numericDiscount) / 100).toFixed(2)
            : numericPrice}
        </p>
        <div className="flex gap-[12px] items-center">
          <button
            onClick={() => dispatch(toggalAmount({ type: false, id }))}
            className="bg-[var(--primary)] px-[10px] py-[3px]  font-bold rounded-[100%] text-[#fff]"
          >
            --
          </button>
          <p className="font-semibold text-[17px] text-[#3d3d3d] leading-[59%]">
            {count}
          </p>
          <button
            onClick={() => dispatch(toggalAmount({ type: true, id }))}
            className="bg-[var(--primary)] px-[10px] py-[3px] font-bold rounded-[100%] text-[#fff] "
          >
            +
          </button>
        </div>
        <div className="flex items-center gap-[70px]">
          <p className="font-bold text-[17px] leading-[100%] text-[var(--primary)]">
            $
            {numericDiscount
              ? (
                  (numericPrice - (numericPrice * numericDiscount) / 100) *
                  count
                ).toFixed(2)
              : numericPrice * count}
          </p>
          <div className="w-[20px] h-[20px]">
            <img
              className="w-full h-full object-cover"
              src={KarzinkaIcon.src}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
