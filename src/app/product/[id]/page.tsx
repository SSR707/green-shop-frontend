"use client";
import { Location } from "@/components/location/location";
import SearchIcon from "../../../../public/svg/header-search.svg";
import RatingImg from "../../../../public/svg/reating.svg";
import { Button } from "@/components/ui/button";
import GreenLikeImg from "../../../../public/svg/green-like.svg";
import KarzinaIcon from "../../../../public/svg/karzinka.svg";
import LoadingSpinner from "@/components/loading/loading";
import { ReletedProduct } from "@/app/_components/product-diteil/swipper/swipper";
import { getProducts } from "@/service/query/getProducts";
import { getProductsById } from "@/service/query/getProductsById";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { SizeBtn } from "@/app/_components/product-diteil/btn/size-btn";
import {
  addToProductCart,
  deleteProductCart,
} from "@/store/reducer/cart-reducer";
import { RootState } from "@/store/store";

const size = ["S", "M", "L", "XL"];
const Product = () => {
  const { id }: { id: string } = useParams();
  const CartProduct = useSelector((state: RootState) => state.product.products);
  const [isChekProduct, setIsChekProduct] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { data: product } = getProductsById(id);
  const { data: products } = getProducts({ page: 1, limit: 15 });
  const [sizeActiveSize, setSizeActiveSize] = useState<string | null>(null);
  const [chekProductSize, setChekProductSize] = useState(false);
  const [chekProductCount, setChekProductCount] = useState(false);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const product = CartProduct.find((item) => item.id === id);
    setIsChekProduct(product ? true : false);
  }, [id, CartProduct]);

  const AddToCart = () => {
    if (product?.data) {
      if (counter > 0 && sizeActiveSize) {
        dispatch(
          addToProductCart({
            ...product?.data,
            count: counter,
            sub_size: sizeActiveSize,
            userCount: counter,
            userPrice: parseFloat(product.data.price) * counter,
          })
        );
      } else {
        setChekProductCount(counter <= 0 ? true : false);
        setChekProductSize(!sizeActiveSize ? true : false);
        setTimeout(() => setChekProductSize(false), 3000);
        setTimeout(() => setChekProductCount(false), 3000);
      }
    }
  };
  return (
    <section className="pb-[150px]">
      <div className="container">
        {!product ? (
          <LoadingSpinner />
        ) : (
          <>
            <Location />
            <div className="pt-[43px] flex gap-[50px]">
              <div className=" relative flex gap-[46px] items-center w-[46%]">
                <div className=" absolute w-[18px] h-[18px] top-0 right-0 ">
                  <img
                    className="w-full h-full object-cover"
                    src={SearchIcon.src}
                    alt=""
                  />
                </div>
                <div className=" flex flex-col gap-[16px]">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className=" w-[100px] h-[100px] ">
                      <img
                        className="w-full h-full object-cover"
                        src={`${product?.data?.picture}`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full h-[404] ">
                  <img
                    className="h-full w-full object-cover"
                    src={product?.data?.picture}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <div className="border-b-1 border-[#A2D0AB] pb-[13px]">
                  <h3 className="font-bold text-[28px] leading-[57%] text-[#3d3d3d]">
                    {product?.data?.title}
                  </h3>
                  <div className="mt-[21px] flex justify-between w-full items-center ">
                    <p className="font-bold text-[22px] leading-[73%] text-[var(--primary)]">
                      {product?.data?.price}
                    </p>
                    <div className="flex gap-[11px]">
                      <img src={RatingImg.src} alt="" />
                      <p className="font-normal text-[15px] text-[#3d3d3d] max-w-[141px]">
                        {product?.data?.reviews.length} Customer Review
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-[15px]">
                  <p className="font-semibold text-[16px] text-[#3d3d3d]">
                    Short Description:
                  </p>
                  <p className="font-normal text-[14px] text-[#727272] mt-[10px]">
                    {product?.data?.summary}
                  </p>
                  <p className="font-semibold text-[16px] text-[#3d3d3d] mt-[24px] mb-[11px] flex">
                    Size{" "}
                    {chekProductSize ? (
                      <span className="text-red-500 font-normal">
                        : Plese enter product size!
                      </span>
                    ) : null}
                  </p>
                  <div className="flex gap-[10px]">
                    {size.map((item, index) => (
                      <SizeBtn
                        key={index}
                        onClick={() => setSizeActiveSize(item)}
                        size={item}
                        isActive={sizeActiveSize === item}
                      />
                    ))}
                  </div>
                  <div className="mt-[23px] flex gap-[26px] items-center ">
                    <div className="flex gap-[23px] items-center">
                      <button
                        onClick={() =>
                          setCounter(counter > 0 ? counter - 1 : counter)
                        }
                        className="px-[14px] py-[4px] rounded-[31px] text-[#fff] bg-[var(--primary)] text-[28px] font-bold"
                      >
                        ---
                      </button>
                      <p className="font-semibold text-[20px]  text-[#3d3d3d]">
                        {counter}
                      </p>
                      <button
                        onClick={() => setCounter(counter + 1)}
                        className="px-[17px] py-[4px] rounded-[31px]  text-[#fff] bg-[var(--primary)] text-[28px] font-bold"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex gap-[10px]">
                      <Button
                        variant="primary"
                        className="font-bold uppercase  leading-[143%]"
                      >
                        Buy NOW
                      </Button>
                      {isChekProduct ? (
                        <Button
                          onClick={() => dispatch(deleteProductCart({ id }))}
                          className="font-bold uppercase  leading-[143%] "
                          variant="danger"
                        >
                          Delete cart
                        </Button>
                      ) : (
                        <Button
                          onClick={AddToCart}
                          variant="transparent"
                          className="font-bold uppercase  leading-[143%]"
                        >
                          Add to cart
                        </Button>
                      )}
                      <Button
                        startIcon={GreenLikeImg.src}
                        variant="transparent"
                      />
                    </div>
                  </div>
                  {chekProductCount ? (
                    <p className="text-red-500 font-normal mt-2">
                      Please enter a product count greater than 0!
                    </p>
                  ) : null}
                  <div className="mt-[26px]">
                    <p className="font-normal text-[15px] text-[#a5a5a5] leading-[107%] ">
                      SKU: <span className="text-[#727272]">1995751877966</span>
                    </p>
                    <p className="font-normal text-[15px] text-[#a5a5a5] leading-[107%] mt-[10px]">
                      Categories:{" "}
                      <span className="text-[#727272]">
                        {" "}
                        {product?.data?.category.name}
                      </span>
                    </p>
                    <p className="font-normal text-[15px] text-[#a5a5a5] leading-[107%] mt-[10px]">
                      Tags:{" "}
                      <span className="text-[#727272]">
                        {product?.data?.tags}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-[16px] ">
                    <p className="font-semibold text-[16px] text-[ #3d3d3d] leading-[107%] mt-[18px]">
                      Share this products: No Share
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[70px]">
              <div className="py-[12px] border-b-1 mb-[44px] border-[#A2D0AB]">
                <p className="font-bold text-[18px] text-[#46a358] leading-[94%] mt-[10px]">
                  Releted Products
                </p>
              </div>
              <ReletedProduct products={products} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Product;
