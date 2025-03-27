"use client";
import dynamic from "next/dynamic";

const HeaderCartBtn = dynamic(
  () => import("@/components/header/header-cart-btn"),
  {
    ssr: false,
  }
);

export const HeaderCartWrapper = () => {
  return <HeaderCartBtn />;
};
