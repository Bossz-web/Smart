import Image from "next/image";
import { BsArrowDownRightSquare } from "react-icons/bs";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { CgArrowDownR } from "react-icons/cg";
import { BsSpotify } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { TbCarFanFilled } from "react-icons/tb";
import { IoWifiSharp } from "react-icons/io5";
import { PiRadioButtonFill } from "react-icons/pi";
import { PiRadioButtonThin } from "react-icons/pi";
import { FiCopy } from "react-icons/fi";
import { FaToggleOff } from "react-icons/fa6";
export const metadata = {
  title: "Homepage",
};
export default function Home() {
  return (
    <>
<main className="min-h-screen gap-8 w-full flex py-3 bg-white font-sans">
          <div className="w-1/2 font-sans justify-between ">
            <div className="pl-56 -ml-2">
              <h1 className=" -mt-2 text-[25px] pb-8 text-gray-600 font-medium"> Welcome back, <span className="font-medium text-gray-900">Alvan!</span></h1>
                <div className="flex justify-between pb-1 items-center">
                  <p className="text-xs text-gray-600">Total balance</p>
                  <div className="flex">
                  <div className=" flex items-center justify-center w-10 h-10 rounded-full">
                    <div className="">
                    <LiaFlagUsaSolid className="text-2xl rounded-full border"/>
                    </div>
                  
                  <div className="mr-8">
                    <h2 className=" flex items-center uppercase font-mono font-semibold text-[15px]">USD<IoIosArrowDown className="text-xs"/></h2>
                  </div>
                  
                  </div> 
                  
                  </div> 
                </div>
              <h1 className="text-3xl font-serif pb-5 font-medium"> $1,250.80</h1>
            <div className="flex mt-4 items-center space-x-4">
                    <button className="rounded-xl border flex items-center gap-3 px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-1000"> <BsArrowDownRightSquare />Top up</button>
                    <button className="rounded-xl border flex items-center gap-3 px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-1000"> <BsArrowUpRightSquare /> Withdraw</button>
                    <button className="rounded-xl border flex items-center gap-3 px-8 py-3 hover:bg-gray-800 hover:text-white transition-all duration-1000"><CgArrowsExchangeAlt className="text-xl" /> Convert</button>
            </div>

      {/* Transaction history */}
          <div className="pt-6 pb-4">
              <h2 className="font-medium pt-8 text-[13px]">Transaction history</h2>
          </div>

      {/* Filter Toolbar */}
        <section className="flex flex-wrap justify-between bg-gray py-4 rounded-xl items-center mb-6">
          <div className="flex space-x-2 items-center mb-2">
            <div className="">
              <input id="search" type="text" placeholder="Search" className="px-3 py-2 w-40 border rounded-lg"/>
                </div>
        {/* Date picker */}
          <div className="">
            <button className="flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-all duration-1000  px-3 py-2 w-[50] border rounded-lg">05 <IoIosArrowDown /></button>
              </div>

          <div className="">
              <input type="date" className="uppercase px-3 py-2 border rounded-lg cursor-pointer"/>
                </div>

          <div className="">
            <button className=" hover:bg-gray-800 flex items-center gap-3 hover:text-white transition-all duration-1000  px-3 py-2 w-40 border rounded-lg"><CgArrowDownR />Export as<IoIosArrowDown /></button>
              </div>
                </div>
        </section>

        {/* Top up */}
        <section className="pb-14">
          <div className="flex justify-between pb-1 items-center">
            <div className="flex space-x-3">
            <div className="border flex items-center justify-center w-10 h-10 rounded-full">
                <BsArrowDownRightSquare/> 
                </div>
            <div className="font-semibold">
              <h1 className="flex items-center gap-3">
                Top up</h1>
              <p className="font-sans font-normal text-gray-700">25 Dec, 2025</p>
            </div>
            </div>
            <div className="font-semibold">
              <h3 className="font-sans">+$890.00</h3>
            </div>
          </div>

          <hr className="my-5" />

          {/* Alex Barthel */}
          <div className="flex justify-between pb-1 items-center">
            <div className="flex space-x-3">
            <div className="border flex items-center justify-center w-10 h-10 rounded-full">
                <BsArrowUpRightSquare /> 
                </div>
            <div className="font-semibold">
                <h1 className="flex items-center gap-3">To: Alex Barthel</h1>
                  <p className="font-sans font-normal text-gray-700">23 Dec, 2025</p>
                    </div>
                      </div>

            <div className="font-semibold">
              <h3 className="font-sans">-$230.00</h3>
            </div>
          </div>
          <hr className="my-5" />
          {/* Spotify Card */}
          <div className="flex justify-between pb-1 items-center">
            <div className="flex space-x-3">
              <div className="border flex items-center justify-center w-10 h-10 rounded-full">
                <BsSpotify /> 
                </div>
                <div className="font-semibold">
              <h1 className="flex items-center gap-3">
                Spotify-Card</h1>
              <p className="font-sans font-normal text-gray-700">18 Dec, 2025</p>
            </div>
          </div>
            <div className="font-semibold">
              <h3 className="font-sans">-$50.00</h3>
            </div>
          </div>
          <hr className="my-5" />
          {/* Top up 2 */}
          <div className="flex justify-between pb-1 items-center">
            <div className="flex space-x-3">
            <div className="border flex items-center justify-center w-10 h-10 rounded-full">
                <BsArrowDownRightSquare /> 
                </div>
                <div className="font-semibold">
              <h1 className="flex items-center gap-3">Top up</h1>
              <p className="font-sans font-normal text-gray-700">10 Dec, 2025</p>
            </div>
          </div>
            <div className="font-semibold">
              <h3 className="font-sans">+$480.00</h3>
            </div>
          </div>

          <hr className="my-5" />

          {/* Covert */}
          <div className="flex justify-between pb-1 items-center">
            <div className="flex space-x-3">
              <div className="border flex items-center justify-center w-10 h-10 rounded-full">
                <BsArrowUpRightSquare />
                </div>
              <div className="font-semibold">
                <h1 className="flex items-center gap-3">Convert-USD/EUR</h1>
                  <p className="font-sans font-normal text-gray-700">9 Dec, 2025</p>
                </div>
            </div>
          <div className="font-semibold">
              <h3 className="font-sans">-$230.00</h3>
          </div>
        </div>
      </section>
 {/* Navigation buttons */}
 <div className="pb-24 justify-center flex">
        <div className="flex mt-4 items-center space-x-1">
            <button className="rounded-md  border flex items-center  px-4 py-1 hover:bg-gray-400 hover:text-white transition-all duration-1000">1</button>
            <button className="rounded-md  border flex items-center  px-4 py-1 hover:bg-gray-400 hover:text-white transition-all duration-1000">2</button>
            <button className="rounded-md  border flex items-center  px-4 py-1 hover:bg-gray-400 hover:text-white transition-all duration-1000">3</button>
            <button className="rounded-md  border flex items-center  px-4 py-1 hover:bg-gray-400 hover:text-white transition-all duration-1000">4</button>
            <button className="rounded-md  border flex items-center  px-5 py-1 bg-black hover:bg-gray-400 hover:text-black transition-all duration-1000 text-white">Next</button>
          </div>
      </div>
      </div>
        </div>

  {/* Second Contents */}
  <section className="w-1/2 h-max -mt-2 ">
    <div className="flex gap-12">
      {/* First column */}
    <div className="text-left w-max">
        <h1 className="text-lg pb-8 font-semibold">Card details</h1>
        <div className="pb-1">
        <div class="w-[170px] h-[210px]  rounded-lg text-white overflow-hidden shadow-lg bg-black">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 flex justify-between items-center">
    <h2 className="text-orange-500 text-2xl"><TbCarFanFilled /></h2>
    <h2 className="text-2xl text-gray-500"><IoWifiSharp /></h2>
    </div>
    <div className=" flex flex-col justify-end h-[160px]">
        <p className="text-gray-400 uppercase text-sm font-medium">
          alvan sanders
        </p>
  </div>
  </div>
 
</div>
        </div>
        {/* Toggler*/}
        <link rel="stylesheet" href="" className="block"/> 
        <div className="flex justify-center w-[170px] py-4">
          <h2 className="text-3xl"><PiRadioButtonFill /></h2>
          <h2 className="text-3xl"><PiRadioButtonThin /></h2>
        </div>
    </div>
    {/* Second coloumn */}
    <div className="w-1/2 h-full text-left">
        <p className="pt-20 font-normal text-gray-500 text-xs">Cardholder no</p>
        <div className="flex py-4 space-x-5 items-center">
        <h1 className="text-2xl font-serif">2456 7756 6746 8745</h1>
        <p className="text-2xl"><FiCopy /></p>
        </div>
    </div>
    </div>
  </section>

</main>
    



    
    </>
  );
}