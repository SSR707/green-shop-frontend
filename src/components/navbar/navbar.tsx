"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavbarBtn } from "./navbar-btn";

const Navbar = () => {
  const [onClick, setOnClick] = useState(false);
  const navbar = ["Home", "Shop", "Plant Care", "Blogs"];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="flex items-center gap-[50px] ">
      {navbar.map((item, index) => (
        <Link key={index} href={"/"}>
          <NavbarBtn
            text={item}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
