"use client";
import LikeIcon from "../../../../../public/svg/like.icon.svg";
import SearchIcon from "../../../../../public/svg/header-search.svg";
import CartIcon from "../../../../../public/svg/header-cart.svg";
import KarzinkaIcon from "../../../../../public/svg/karzinka.svg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { deleteProductCart } from "@/store/reducer/cart-reducer";
interface IProductCard {
  id: string;
  img: string;
  title: string | undefined;
  price: string | undefined;
  discount?: string | null;
}
export const ProductCard = ({
  id,
  img,
  title,
  price,
  discount,
}: IProductCard) => {
  const numericPrice = Number(price) || 0;
  const numericDiscount = Number(discount) || 0;
  const CartProduct = useSelector((state: RootState) => state.product.products);
  const [isChekProduct, setIsChekProduct] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const product = CartProduct.find((item) => item.id === id);
    setIsChekProduct(product ? true : false);
  }, [id, CartProduct]);
  return (
    <div className="w-[258px] group  ">
      <div className="relative px-[4px] pb-[19px] pt-[25px] border-t-2 border-transparent group-hover:border-[var(--primary)]">
        {discount ? (
          <div className="absolute px-[9px] py-[7px] bg-[var(--primary)] top-[14px] left-0">
            <p className="font-medium text-[16px] leading-[100%] text-[#fff]">
              {numericDiscount.toFixed(0)}% OFF
            </p>
          </div>
        ) : null}
        <div className="w-[250px] h-[250px]">
          <img className="w-full h-full object-cover" src={`${img}`} alt="" />
        </div>
        <div className="flex opacity-0 group-hover:opacity-100 absolute bottom-[10px] left-1/2 transform -translate-x-1/2 items-center gap-[26px]">
          <button onClick={() => dispatch(deleteProductCart({ id }))}>
            <img
              className="w-[20px] h-[20px]"
              src={isChekProduct ? KarzinkaIcon.src : CartIcon.src}
              alt=""
            />
          </button>
          <img className="w-[20px] h-[20px]" src={LikeIcon.src} alt="" />
          <img className="w-[20px] h-[20px]" src={SearchIcon.src} alt="" />
        </div>
      </div>
      <Link href={`/product/${id}`} className=" cursor-pointer">
        <p className="mt-[12px] font-normal text-[16px] leading-[100%] text-[#3d3d3d]">
          {title}
        </p>
        <div className="flex mt-1.5 items-center gap-[17px]">
          {" "}
          <p className="font-bold text-[18px] leading-[89%] text-[var(--primary)]">
            $
            {numericDiscount
              ? (numericPrice - (numericPrice * numericDiscount) / 100).toFixed(
                  2
                )
              : numericPrice}
          </p>
          {numericDiscount && numericPrice ? (
            <p className="font-normal text-[18px] leading-[100%] text-[#a5a5a5] line-through">
              {" "}
              ${numericPrice.toFixed(2)}
            </p>
          ) : null}
        </div>
      </Link>
    </div>
  );
};
