"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ProductResponse } from "@/service/query/getProducts";
import { ProductCard } from "../../home/products/product-card";

export const ReletedProduct = ({
  products,
}: {
  products: ProductResponse | undefined;
}) => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="custom-swiper h-[400px] "
      >
        {products?.data?.products.map((item) => (
          <SwiperSlide>
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.picture}
              title={item.title}
              price={item.price}
              discount={item.discount_value}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
