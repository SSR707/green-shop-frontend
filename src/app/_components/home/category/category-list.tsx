import { IQuery } from "../products/products";

export const CategoryList = ({
  text,
  count,
  isActive,
  onClick,
}: {
  text: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex justify-between cursor-pointer" onClick={onClick}>
      <p
        className={` text-[16px]  ${
          isActive
            ? "font-bold text-[var(--primary)]"
            : "text-[#3d3d3d] font-normal"
        }`}
      >
        {text}
      </p>
      <p
        className={` text-[16px]  ${
          isActive
            ? "font-bold text-[var(--primary)]"
            : "text-[#3d3d3d] font-normal"
        }`}
      >
        ({count})
      </p>
    </div>
  );
};
