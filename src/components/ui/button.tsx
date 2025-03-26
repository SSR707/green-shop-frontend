import clsx from "clsx";
type ButtonVariant = "primary" | "utility" | "join";

export const Button = ({
  children,
  startIcon,
  endIcon,
  variant,
  type = "button",
  className,
  onClick,
  ...props
}: {
  children?: any;
  startIcon?: string;
  endIcon?: string;
  variant: ButtonVariant;
  type?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center rounded-[6px]  font-mediu  cursor-pointer",
        {
          "px-[27px] py-[11px] bg-[var(--primary)] rounded-[6px] text-[#fff] gap-[4px] ":
            variant === "primary",
          "px-[17px] py-[8px] bg-[var(--primary)] text-[#fff] gap-[4px]":
            variant === "utility",
          "px-[25px] py-[12px] bg-[var(--primary)] text-[#fff] gap-[4px] rounded-tl-none rounded-tr-[6px] rounded-br-[6px] rounded-bl-none":
            variant === "join",
        },
        className
      )}
      {...props}
    >
      <img src={startIcon} alt="" />
      {children}
      <img src={endIcon} alt="" />
    </button>
  );
};
