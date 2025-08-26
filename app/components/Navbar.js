import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-[#fffff] flex h-max">
        <div className="flex items-center mx-auto justify-between h-[60px] w-[92%]">
          <div className="flex items-center space-x-0">
          <img src="/Smart-card-icon.png" alt=""  className="h-9 w-9 object-cover"/>
            <h1 className="text-sm font- text-black text-[12px] font-bold uppercase">
               <Link href="/Home" className="font-[] text-xs font-bolder">Smart<span className=" font-serif font-extralight">+ Card</span> </Link>
                </h1>
          </div>
          
            </div>
    </nav>
  );
};

export default Navbar;
