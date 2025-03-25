export const StatusItem = ({
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
      className={` cursor-pointer ${
        isActive ? "border-b-4 border-[var(--primary)]" : "border-none"
      }   `}
      onClick={onClick}
    >
      <p
        className={` text-[16px]  ${
          isActive
            ? "font-bold text-[var(--primary)]"
            : "text-[#3d3d3d] font-normal"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
