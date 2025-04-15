import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-[#fffff] py-2 h-[100px] justify-between  flex">
        <div className="px-[55px] py-[15px] flex">
            <h1 className="text-sm font-sans text-black font-bold uppercase">
                <a href="#">Smart <span className="font-light font-serif">+ Card</span></a>
                </h1>
            </div>
    </nav>
  );
};

export default Navbar;
