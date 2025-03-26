import React from "react";

interface IList {
  title: string;
  sub_title_1: string;
  sub_title_2: string;
  sub_title_3: string;
  sub_title_4: string;
  sub_title_5: string;
}

export const FooterList = ({
  title,
  sub_title_1,
  sub_title_2,
  sub_title_3,
  sub_title_4,
  sub_title_5,
}: IList) => {
  return (
    <ul>
      <li className="font-bold text-[18px] leading-[89%] text-[#3d3d3d]">
        {title}
      </li>
      <li className="font-normal text-[14px] leading-[214%] text-[#3d3d3d] mt-[8px]">
        {sub_title_1}
      </li>
      <li className="font-normal text-[14px] leading-[214%] text-[#3d3d3d]">
        {sub_title_2}
      </li>
      <li className="font-normal text-[14px] leading-[214%] text-[#3d3d3d]">
        {sub_title_3}
      </li>
      <li className="font-normal text-[14px] leading-[214%] text-[#3d3d3d]">
        {sub_title_4}
      </li>
      <li className="font-normal text-[14px] leading-[214%] text-[#3d3d3d]">
        {sub_title_5}
      </li>
    </ul>
  );
};
