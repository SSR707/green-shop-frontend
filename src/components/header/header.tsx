import HeaderImg from "../../../public/svg/header-img.svg";
import HeaderSearch from "../../../public/svg/header-search.svg";
import HeaderExit from "../../../public/svg/header-exit.svg";
import HeaderCart from "../../../public/svg/header-cart.svg";
import Navbar from "../navbar/navbar";

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <div className="border-b-1 border-[#A2D0AB] flex items-center pb-[17px] pt-[26px] justify-between">
          <div className="">
            <img src={HeaderImg.src} alt="" />
          </div>
          <Navbar />
          <div className="flex items-center gap-[30px]">
            <button>
              <img src={HeaderSearch.src} alt="" />
            </button>
            <div>
              <img src={HeaderCart.src} alt="" />
            </div>
            <button className="flex px-[17px] py-[8px] bg-[var(--primary)] font-medium text-[16px] text-[#fff] rounded-[6px] gap-[4px]">
              <img src={HeaderExit.src} alt="" />
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
