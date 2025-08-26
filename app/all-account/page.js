import Image from "next/image";
import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { GiEuropeanFlag } from "react-icons/gi";
import { SiAircanada } from "react-icons/si";
import { GoPlus } from "react-icons/go";

export const metadata = {
  title: "All Accounts",
};
export default function account() {
  return (
<>
<main className="bg-gray-400 h-screen">
    <section className="p-5 w-full flex">
    <div className="w-[320px] rounded-xl mx-auto h-max bg-white p-8">
{/* top texts */}
    <div className="flex justify-between items-center ">
        <h1 className=" font-sans font-mdeium text-xl">All accounts</h1>
        <span className="cursor-pointer"><GoPlus /></span>  
    </div>
{/* USD */}
<div className="mt-10">   
<div className="flex justify-between items-center">
    <div className="flex  items-center">
        <div className="mr-2">
            <LiaFlagUsaSolid className="text-2xl bg-white text-red-500 w-8 h-8 rounded-full border"/>
        </div>
        <div className="mr-7">
          <h2 className="text-lg flex items-center uppercase font-semibold">USD</h2>
          <div className="flex">
                <span></span>
                <p className=" text-xs">US dollar</p>
            </div>
        </div>
        </div>
        <div className="">
            <h1 className="font-medium text-black">$1250.80</h1>
        </div>
        </div>
            
        </div> 
{/* EUR */}
<div className="mt-10 ">   
<div className="flex justify-between items-center">
    <div className="flex  items-center">
        <div className="mr-2">
            <GiEuropeanFlag className="text-2xl w-8 h-8 bg-blue-700 text-yellow-600 rounded-full border"/>
        </div>
        <div className="mr-7">
          <h2 className="text-lg flex items-center uppercase font-semibold">EUR</h2>
          <div className="flex">
                <span></span>
                <p className=" text-xs">Euro</p>
            </div>
        </div>
        </div>
        <div className="">
            <h1 className="font-medium text-black">$1184.60</h1>
        </div>
        </div>
            
        </div> 

{/* CAD */}
<div className="mt-10 pb-8">   
<div className="flex justify-between items-center">
    <div className="flex  items-center">
        <div className="mr-2">
            <SiAircanada className="text-2xl w-8 h-8 bg-white text-red-700 rounded-full border"/>
        </div>
        <div className="mr-7">
          <h2 className="text-lg flex items-center uppercase font-semibold">CAD</h2>
          <div className="flex">
                <span></span>
                <p className=" text-xs">Canadian Dollar</p>
            </div>
        </div>
        </div>
        <div className="pb-">
            <h1 className="font-medium text-black">$1090.00</h1>
        </div>
        </div>
            
        </div>                
            </div>
        </section>
    </main>
    </>
  )
}