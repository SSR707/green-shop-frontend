export const FooterCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative after:content-[''] after:w-[2px] after:h-[187px] after:bg-[#EDF6EF] after:absolute after:top-[5px] after:right-[-25px] w-[204px]">
      <div>
        <img src={img} alt="" />
      </div>
      <h3 className="mt-[17px] font-bold text-[17px] leading-[94%] text-[#3d3d3d]">
        {title}
      </h3>
      <p className="mt-[9px] font-normal text-[14px] leading-[157%] text-[#727272] max-w-[204px]">
        {description}
      </p>
    </div>
  );
};
