"use client";

export const NavbarBtn = ({
  text,
  isActive,
  onClick,
}: {
  text: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={` cursor-pointer ${
        isActive
          ? `relative after:content-[''] after:w-full after:h-1 after:bg-[var(--primary)] after:absolute after:top-[45px]`
          : ""
      }`}
    >
      <h3
        className={`text-[16px] text-[#3d3d3d] ${
          isActive ? "font-bold " : "font-normal"
        } `}
      >
        {text}
      </h3>
    </div>
  );
};
