import Image from "next/image";

export const metadata = {
  title: "Verify - Smart+CARD",
};
export default function Verify() {
  return (
    <>
    <main>
    <section className="py-6 px-8 w-full"> 
      <div className="mx-auto px-3 w-1/4 h-full text-left">
        <h1 className=" text-black text-[19px] font-medium font-bold">Verify email</h1>
        <div className="text-xs">
        <p className="text-xs pt-1 pb-10 font-medium text-gray-600">Kindly verify your email to reset password</p>
        <div className="">
          <form action="" className="max-width mx-auto pb-6">
            <label className="font-semibold block text-xs pb-2">Enter code</label>
            <input type="email" placeholder="e.g 12345" className="rounded-xl border px-4 py-2 w-full"/>
          </form>
        </div>
        </div>
      </div>
          <div className="text-center mx-auto px-3 w-1/4 h-full">
              <button className="w-full text-xs bg-black rounded-lg py-2 text-white"><a href="#">Confirm</a></button>
              <div className="p-8">
              <p className=" text-xs p-4">Don&apos;t receive a code? <span className="font-bold"><a href="#">Resend in 00:59</a></span></p>
              </div>
          </div>

    </section>
    </main>
    </>
    );
};