import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-[#fffff] pt-3 h-[100px] justify-between flex">
        <div className="px-[50px] py-[15px] flex">
            <h1 className="text-sm font- text-black pl-5 text-[12px] font-bold uppercase">
            
               <Link href="/" className="font">Smart<span className="font-light font-serif">+ Card</span> </Link>
                </h1>
            </div>
    </nav>
  );
};

export default Navbar;
