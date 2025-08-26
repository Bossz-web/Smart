import Image from "next/image";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { GiEuropeanFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
export const metadata = {
  title: "Convert",
};
export default function convert() {
  return (
<>
<main className="bg-gray-400 h-screen">
    <section className="p-5 w-full flex ">
        <div className="-mt-[40px] bg-white w-[360px] mx-auto h-[450px] rounded-lg p-10">
            <div className="flex justify-between items-center">
                <h1 className="capitalize font-sans font-mdeium text-xl">convert</h1>
                <span className="cursor-pointer"><LiaTimesSolid /></span>  
            </div> 
            {/* USD */}
            <div className=" pt-5 flex justify-between items-center pr-2"> 
            <p className="text-xs capitalize">Amount</p>
            <div className=" flex items-center justify-center w-10 h-10 rounded-full">
        <div className="mr-2">
            <LiaFlagUsaSolid className="text-2xl rounded-full text-red-500 border"/>
          </div>

        <div className="mr-7">
          <h2 className=" flex items-center uppercase font-mono font-semibold">USD<IoIosArrowDown className="text-xs"/></h2>
        </div>

      </div> 
    </div>  
    {/* Form */}
    <div className="w-full h-40">
    <div className="">
          <form action="" className=" max-width mx-auto pb-1 ">
            <input type="text" placeholder="$0.00" className="rounded-lg border px-4 py-4 w-full text-lg placeholder:text-black"/>
          </form>
          <div className="text-right">
            <p className="capitalize text-xs">total bal~$1250.80</p>
          </div>
    </div>
        <hr className="mt-10" />
    </div> 
    {/* Euro */}
    <div className="-mt-6 flex justify-between items-center pr-2"> 
            <p className="text-xs capitalize">Amount</p>
            <div className=" flex items-center justify-center w-10 h-10 rounded-full">
        <div className="mr-2">
            <GiEuropeanFlag className="text-2xl bg-blue-600 text-yellow-600 rounded-full border"/>
          </div>
        <div className="mr-7">
          <h2 className=" flex items-center uppercase font-mono font-semibold">EUR<IoIosArrowDown className="text-xs"/></h2>
        </div>

      </div> 
    </div>
    {/* Form */}
    <div className="">
          <form action="" className=" max-width mx-auto pb-1 ">
            <input type="text" placeholder="$0.00" className="rounded-lg border px-4 py-4 w-full text-lg placeholder:text-black"/>
          </form>
    </div>
    {/* Conversion rate*/}
    <div className="flex justify-between items-center mt-8">
            <h1 className="capitalize text-gray-500">conversion rate</h1>
            <p className="font-semibold capitalize text-black">$0.85</p>
          </div>
        {/* Transaction fee */}
          <div className="flex justify-between items-center mt-5">
            <h1 className=" capitalize text-gray-500">transaction fee</h1>
            <p className="font-semibold capitalize text-black">$1.50</p>
          </div>
          {/* Button */}
          <div className="text-center mt-7 flex justify-center items-center mx-auto w-full h-max ">
              <button className="w-full text-xs bg-black rounded-xl py-4 text-white"><a href="#">Convert</a></button>
          </div>
        </div>
    </section>
</main>
</>
  )
}
