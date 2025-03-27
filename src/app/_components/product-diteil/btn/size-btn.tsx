export const SizeBtn = ({
  size,
  isActive,
  onClick,
}: {
  size: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-[33px] h-[33px] border rounded-[100%] text-center text-[16px] ${
        isActive
          ? "font-bold border-[var(--primery)] text-[var(--primary)]"
          : "font-medium text-[#727272] border-[#eaeaea]"
      } `}
    >
      {size}
    </button>
  );
};
