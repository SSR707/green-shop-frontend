import NextPage from "../../../public/svg/next-page.svg";

export const Paganation = ({
  startChek,
  endChek,
  page,
  isActive,
  onClick,
}: {
  startChek?: boolean;
  endChek?: boolean;
  page?: number;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <>
      {startChek ? (
        <button
          onClick={onClick}
          className={`px-[14px] py-[9px] text-[18px] rounded-[4px]  bg-transparent border border-[#e5e5e5] 
          `}
        >
          <img src={NextPage.src} alt="" />
        </button>
      ) : null}

      {endChek || startChek ? null : (
        <button
          onClick={onClick}
          className={`px-[14px] py-[9px] text-[18px] rounded-[4px] leading-[89%]  ${
            isActive
              ? "bg-[var(--primary)] text-[#fff] font-bold"
              : "bg-transparent border border-[#e5e5e5] font-normal"
          }`}
        >
          {page}
        </button>
      )}
      {endChek ? (
        <button
          onClick={onClick}
          className={`px-[14px] py-[9px] text-[18px] rounded-[4px]  bg-transparent border border-[#e5e5e5] 
          `}
        >
          <img src={NextPage.src} alt="" />
        </button>
      ) : null}
    </>
  );
};
