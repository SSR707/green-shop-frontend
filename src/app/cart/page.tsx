"use client";
import { Location } from "@/components/location/location";
import { Button } from "@/components/ui/button";
import { CartCard } from "../_components/cart/cart-card";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const { productCount, products, totalPrice } = useSelector(
    (state: RootState) => state.product
  );
  return (
    <section>
      <div className="container">
        <Location />
        <div className="pt-[50px] pb-[87px] flex justify-between ">
          <div className="w-[63%]">
            <div className="flex gap-[230px] pb-[11px] border-b border-[#A2D0AB]">
              <h3 className="font-semibold text-[16px] leading-[100%] text-[#3d3d3d]">
                Products
              </h3>
              <div className="flex gap-[90px] mr-[100px]">
                <h3 className="font-semibold text-[16px] leading-[100%] text-[#3d3d3d]">
                  Price
                </h3>
                <div className="flex items-center gap-[90px]">
                  <h3 className="font-semibold text-[16px] leading-[100%] text-[#3d3d3d]">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-[16px] leading-[100%] text-[#3d3d3d]">
                    Total
                  </h3>
                </div>
              </div>
            </div>
            {products.map((item) => (
              <CartCard
                key={item.id}
                img={item.picture}
                title={item.title}
                price={item.price}
                discount={item.discount_value}
                id={item.id}
                count={item.userCount}
              />
            ))}
          </div>
          <div className="w-[30%]">
            <div className=" pb-[12px] border-b border-[#A2D0AB]">
              {" "}
              <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d]">
                Cart Totals
              </h3>
            </div>
            <p className="font-normal text-[14px] leading-[114%] text-[#3d3d3d] mt-[11px]">
              Coupon Apply
            </p>
            <div className="flex rounded-[6px] overflow-hidden  border-1 border-[var(--primary)] mt-[8px]">
              <input
                type="text"
                placeholder="Enter coupon code here..."
                className="focus:outline-none px-[10px] py-[10px] w-full"
              />
              <Button
                variant="join"
                className="font-bold text-[18px] leading-[89%]"
              >
                Apply
              </Button>
            </div>
            <div className="flex justify-between items-center mt-[30px]">
              <p className="font-normal text-[16px] leading-[107%] text-[#3d3d3d]">
                Subtotal
              </p>
              <p className="font-semibold text-[18px] leading-[89%] text-[#3d3d3d]">
                $2,683.00
              </p>
            </div>
            <div className="flex justify-between items-center mt-[15px]">
              <p className="font-normal text-[16px] leading-[107%] text-[#3d3d3d]">
                Coupon Discount
              </p>
              <p className="font-medium text-[16px] leading-[89%] text-[#3d3d3d]">
                (-) 00.00
              </p>
            </div>
            <div className="flex justify-between items-center mt-[21px]">
              <p className="font-normal text-[16px] leading-[107%] text-[#3d3d3d]">
                Shiping
              </p>
              <p className="font-semibold text-[18px] leading-[89%] text-[#3d3d3d]">
                $16.00
              </p>
            </div>
            <p className="font-normal text-[12px] leading-[133%] text-[var(--primary)] text-end mt-[8px]">
              View shipping charge
            </p>
            <div className="flex justify-between items-center mt-[26px]">
              <p className="font-bold text-[18px] leading-[107%] text-[#3d3d3d]">
                Total
              </p>
              <p className="font-bold text-[20px] leading-[89%] text-[var(--primary)]">
                $2,683.00
              </p>
            </div>
            <Button
              variant="primary"
              className="font-bold text-[18px] leading-[107%] w-full mt-[29px] py-[14px]"
            >
              Proceed To Checkout
            </Button>
            <p className="font-normal text-[15px] leading-[107%] text-[var(--primary)] text-center mt-[14px]">
              Continue Shopping
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
