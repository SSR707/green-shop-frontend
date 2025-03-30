"use client";
import { OrderCard } from "@/app/_components/order/order-card";
import { OrderForm } from "@/app/_components/order/order-form";
import { Location } from "@/components/location/location";
import { IinitialState } from "@/store/reducer/cart-reducer";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const { productCount, products, totalPrice } = useSelector(
    (state: RootState) => state.product
  );
  const [data, setData] = useState<IinitialState>();
  useEffect(() => {
    setData({ productCount, products, totalPrice });
  }, [productCount, products, totalPrice]);
  return (
    <section>
      <div className="container">
        <Location />
        <div className="flex pt-[36px] pb-[100px] gap-[73px]">
          <OrderForm />
          <div className="w-full ">
            <h3 className="font-bold text-[18px] leading-[94%] text-[#3d3d3d] mb-[25px]">
              Your Order
            </h3>
            <div className="flex justify-between pb-[15px] border-b border-[#A2D0AB]">
              <h3 className="font-semibold text-[16px] leading-[100%] text-[#3d3d3d] ">
                Products
              </h3>
              <h3 className="font-semibold text-[16px] leading-[100%] text-[#3d3d3d]">
                Subtotal
              </h3>
            </div>
            {data?.products.map((item) => (
              <OrderCard
                key={item.id}
                img={item.picture}
                title={item.title}
                price={item.price}
                discount={item.discount_value}
                id={item.id}
                count={item.userCount}
              />
            ))}
            <div className="flex flex-col items-end">
              <p className="font-normal text-[14px] leading-[114%] text-right text-[#3d3d3d] mt-[17px]">
                Have a coupon code?{" "}
                <span className="font-bold text-[var(--primary)]">
                  Click here
                </span>
              </p>

              <div className="flex justify-between items-center w-[321px] mt-[30px]">
                <p className="font-normal text-[16px] leading-[107%] text-[#3d3d3d]">
                  Subtotal
                </p>
                <p className="font-semibold text-[18px] leading-[89%] text-[#3d3d3d]">
                  ${data?.totalPrice ? data?.totalPrice.toFixed(2) : 0}
                </p>
              </div>
              <div className="flex justify-between items-center mt-[15px] w-[321px]">
                <p className="font-normal text-[16px] leading-[107%] text-[#3d3d3d]">
                  Coupon Discount
                </p>
                <p className="font-medium text-[16px] leading-[89%] text-[#3d3d3d]">
                  (-) 00.00
                </p>
              </div>
              <div className="flex justify-between items-center mt-[21px] w-[321px]">
                <p className="font-normal text-[16px] leading-[107%] text-[#3d3d3d]">
                  Shiping
                </p>
                <p className="font-semibold text-[18px] leading-[89%] text-[#3d3d3d]">
                  ${data?.productCount ? data?.productCount * 4 : 0}
                </p>
              </div>
              <p className="font-normal text-[12px] leading-[133%] text-[var(--primary)] text-end mt-[8px]">
                View shipping charge
              </p>
              <div className="flex justify-between items-center mt-[26px] w-[321px]  border-t-1 border-[var(--primary)] pt-[16px]">
                <p className="font-bold text-[18px] leading-[107%] text-[#3d3d3d]">
                  Total
                </p>
                <p className="font-bold text-[20px] leading-[89%] text-[var(--primary)]">
                  ${data?.totalPrice ? data?.totalPrice.toFixed(2) : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
