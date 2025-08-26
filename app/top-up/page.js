import Image from "next/image";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiEuropeanFlag } from "react-icons/gi";
import { SiAircanada } from "react-icons/si";
import { GoPlus } from "react-icons/go";

export const metadata = {
  title: "Top up",
};
export default function Topup() {
  return (
<>
<main className="bg-gray-400 h-screen">
    <section className="p-5 w-full flex">
    <div className="w-[350px] rounded-xl mx-auto h-max bg-white p-10">
{/* top texts */}
    <div className="flex justify-between items-center ">
        <span className=""></span>
        <span className="cursor-pointer"><LiaTimesSolid /></span>  
    </div>
    <div className="text-center pt-14">
        <p className="text-xs text-gray-600">Amount to top up</p>
            <form action="" className="">
                <input type="text" className="text-4xl text-center border-none focus:outline-none placeholder:text-4xl placeholder:text-gray-400 pt-8 w-full " placeholder="0.00"/>
            </form>
            {/* button */}
            <div className="text-center  mt-16 mb-8 flex justify-center items-center mx-auto w-full h-max ">
              <button className="w-full text-xs bg-black rounded-xl py-4 text-white"><a href="#">Continue</a></button>
          </div>
    </div>
        </div>
        </section>
    </main>
    </>
  )
}