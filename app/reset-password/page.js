import Image from "next/image";

export const metadata = {
  title: "Reset password - Smart+CARD",
};
export default function ResetPassword() {
  return (
    <>
      <main>
      <section className="py-6 px-8 w-full"> 
      <div className="mx-auto px-3 w-1/4 h-full text-left">
        <h1 className=" text-black text-[19px] font-medium font-bold">Reset  <span className="">password</span>
        </h1>
        <div className="text-xs">
        <p className="text-xs pt-1 pb-8 font-medium text-gray-600">Kindly reset your password to protect your account</p>

        <div className="">
          <form action="" className="max-width mx-auto pb-3">
            <label className="font-semibold block text-xs pb-2">New password</label>
            <input type="password" placeholder="***************" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="block font-semibold text-xs pt-5 pb-2">Confirm password</label>
            <input type="password" placeholder="***************" className="rounded-xl border px-4 py-2 w-full"/>
          </form>
        </div>
        </div>
      </div>
          {/* <div className="text-right mx-auto px-3 w-1/4 h-full">
            <p className="py-3 pb-4 text-xs font-medium"><a href="#">Need help with password?</a></p>
          </div> */}
          <div className="text-center mx-auto pt-6 px-3 w-1/4 h-full">
              <button className="w-full text-xs bg-black rounded-lg py-3 text-white"><a href="#">Reset</a></button>
              {/* <div className="p-8">
              <p className=" text-xs p-4">Don&apost have an account? <span className="font-bold"><a href="#">Register</a></span></p>
              </div> */}
          </div>

    </section>
      </main>
    </>
  );
};