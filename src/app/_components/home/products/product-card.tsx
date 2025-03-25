import ProductImg from "../../../../../public/svg/product-img.svg";
import LikeIcon from "../../../../../public/svg/like.icon.svg";
import SearchIcon from "../../../../../public/svg/header-search.svg";
import CartIcon from "../../../../../public/svg/header-cart.svg";
interface IProductCard {
  id: number;
  img: string;
  title: string | undefined;
  price: number | undefined;
  oldPrice?: number | undefined;
  discount?: number | undefined;
  onClick: () => void;
  isActive: boolean;
}
export const ProductCard = ({
  id,
  img,
  title,
  price,
  oldPrice,
  discount,
  onClick,
  isActive,
}: IProductCard) => {
  return (
    <div className="w-[258px] ">
      <div
        className={` relative px-[4px] pb-[19px] ${
          isActive
            ? "border-t-2 border-[var(--primary)]  pt-[24px]"
            : "border-none  pt-[25px]"
        }`}
      >
        {discount ? (
          <div className=" absolute px-[9px] py-[7px] bg-[var(--primary)] top-[14px] left-0">
            <p className="font-medium text-[16px] leading-[100%] text-[#fff]">
              {discount}% OFF
            </p>
          </div>
        ) : null}
        <div className="w-[250px] h-[250px]" onClick={onClick}>
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        {isActive ? (
          <div className="flex  absolute bottom-[10px] left-1/2 transform -translate-x-1/2 items-center gap-[26px]">
            <img className="w-[20px] h-[20px]" src={CartIcon.src} alt="" />
            <img className="w-[20px] h-[20px]" src={LikeIcon.src} alt="" />
            <img className="w-[20px] h-[20px]" src={SearchIcon.src} alt="" />
          </div>
        ) : null}
      </div>
      <p className="mt-[12px] font-normal text-[16px] leading-[100%] text-[#3d3d3d]">
        {title}
      </p>
      <div className="flex mt-1.5 items-center gap-[17px]">
        {" "}
        <p className="font-bold text-[18px] leading-[89%] text-[var(--primary)]">
          ${price?.toFixed(2)}
        </p>
        {oldPrice ? (
          <p className="font-normal text-[18px] leading-[100%] text-[#a5a5a5] line-through">
            {" "}
            ${oldPrice.toFixed(2)}
          </p>
        ) : null}
      </div>
    </div>
  );
};
