import { Button } from "../ui/button";
import { dataContact, footerData } from "./data";
import { FooterCard } from "./footer-card ";
import FooterIcon from "../../../public/svg/header-img.svg";
import LocationIcon from "../../../public/svg/location-icon.svg";
import MainIcon from "../../../public/svg/mail-icon.svg";
import PhoneIcon from "../../../public/svg/phone-icon.svg";
import { FooterList } from "./footer-list";
import Facebook from "../../../public/svg/facebook.svg";
import Instagram from "../../../public/svg/instagram.svg";
import Twitter from "../../../public/svg/twiter.svg";
import LnkedIn from "../../../public/svg/linkedin.svg";
import Union from "../../../public/svg/union.svg";
import Accept from "../../../public/svg/accept.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="mb-[24px] flex gap-[62px] px-[23px]">
          {footerData.map((item) => (
            <FooterCard
              key={item.id}
              img={item.img.src}
              title={item.title}
              description={item.description}
            />
          ))}
          <div className="max-w-[354px]">
            <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d]">
              Would you like to join newsletters?
            </h3>
            <div className="flex shadow-md rounded-[6px] overflow-hidden  border-none mt-[18px]">
              <input
                type="text"
                placeholder="enter your email address..."
                className="focus:outline-none px-[10px] py-[10px] w-full"
              />
              <Button
                variant="join"
                className="font-bold text-[18px] leading-[89%]"
              >
                Join
              </Button>
            </div>
            <p className="font-normal text-[14px] leading-[169%] text-[#727272] mt-[17px]">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
        <div className="bg-[#EDF6EF] pt-[26px] pb-[20px] px-[23px] border-y border-[#D7E9DA] flex gap-[87px] items-center">
          <div className="">
            <img src={FooterIcon.src} alt="" />
          </div>
          <div className="flex items-center gap-[9px]">
            <img src={LocationIcon.src} alt="" />
            <p className="max-w-[176px]  font-normal text-[14px] leading-[157%] text-[#3d3d3d] ">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex items-center gap-[9px]">
            <img src={MainIcon.src} alt="" />
            <p className="font-normal text-[14px] leading-[157%] text-[#3d3d3d]">
              contact@greenshop.com
            </p>
          </div>
          <div className="flex items-center gap-[9px]">
            <img src={PhoneIcon.src} alt="" />
            <p className="font-normal text-[14px] leading-[157%] text-[#3d3d3d]">
              +88 01911 717 490
            </p>
          </div>
        </div>
        <div className="px-[23px] py-[33px] bg-[rgb(251,251,251)] border-b-1 border-[#D7E9DA] flex gap-[166px]">
          {dataContact.map((item, index) => (
            <FooterList
              key={index}
              title={item.title}
              sub_title_1={item.sub_title_1}
              sub_title_2={item.sub_title_2}
              sub_title_3={item.sub_title_3}
              sub_title_4={item.sub_title_4}
              sub_title_5={item.sub_title_5}
            />
          ))}
          <div>
            <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d]">
              Social Media
            </h3>
            <div className="flex gap-[10px] mt-[20px]">
              <img src={Facebook.src} alt="" />
              <img src={Instagram.src} alt="" />
              <img src={Twitter.src} alt="" />
              <img src={LnkedIn.src} alt="" />
              <img src={Union.src} alt="" />
            </div>
            <h3 className="font-bold text-[18px] leading-[89%] text-[#3d3d3d] mt-[33px]">
              We accept
            </h3>
            <div className=" mt-[20px]">
              <img src={Accept.src} alt="" />
            </div>
          </div>
        </div>
        <div className="pt-[7px] pb-[13px] text-center">
          {" "}
          <p className="font-normal text-[14px] leading-[214%] text-[#3d3d3d]">
            © 2021 GreenShop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
