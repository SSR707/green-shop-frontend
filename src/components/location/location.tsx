"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Location = () => {
  const { id } = useParams();
  const pathname = usePathname();
  const [path, setPath] = useState<string[]>([]);

  useEffect(() => {
    const pathSegments = pathname
      .split("/")
      .filter(Boolean)
      .filter(
        (segment, index, arr) =>
          index !== arr.length - 1 || isNaN(Number(segment))
      )
      .map((segment, index) =>
        index === 0
          ? segment.charAt(0).toUpperCase() + segment.slice(1)
          : segment
      );
    if (id) {
      pathSegments.pop();
    }
    setPath(["Home", ...pathSegments]);
  }, [pathname]);

  return (
    <div className="flex gap-1 pt-9">
      {path.map((item, index) => (
        <Link key={index} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
          <p
            className={`text-[15px] leading-[107%] text-[#3d3d3d] ${
              item === "Home" ? "font-bold" : "font-normal"
            }`}
          >
            {item}
            {index !== path.length - 1 ? " /" : null}
          </p>
        </Link>
      ))}
    </div>
  );
};
