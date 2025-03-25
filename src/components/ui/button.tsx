import clsx from "clsx";
type ButtonVariant = "primary" | "utility";

export const Button = ({
  children,
  startIcon,
  endIcon,
  variant,
  type = "button",
  className,
  ...props
}: {
  children?: any;
  startIcon?: string;
  endIcon?: string;
  variant: ButtonVariant;
  type?: string;
  className?: string;
}) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center rounded-[6px]  font-mediu  cursor-pointer",
        {
          "px-[27px] py-[11px] bg-[var(--primary)] rounded-[6px] text-[#fff] gap-[4px] ":
            variant === "primary",
          "px-[17px] py-[8px] bg-[var(--primary)] text-[#fff] gap-[4px]":
            variant === "utility",
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
