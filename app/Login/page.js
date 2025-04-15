import Image from "next/image";

export const metadata = {
  title: "Login - Smart+CARD",
};
export default function Login() {
  return (
    <>
    <main>
    {/* Layout */}
    <section className="py-6 px-8 w-full"> 
      <div className="mx-auto px-3 w-1/4 h-full text-left">
        <h1 className=" text-black text-[19px] font-medium font-bold">Log  <span className="">in</span>
        </h1>
        <div className="text-xs">
        <p className="text-xs pt-1 pb-10 font-medium text-gray-600">kindly login to your account</p>

        <div className="">
          <form action="" className="max-width mx-auto pb-3">
            <label className="font-semibold block text-xs pb-2">Email</label>
            <input type="email" placeholder="e.g example@gmail.com" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="font-semibold text-xs block pt-5 pb-2">Password</label>
            <input type="password" placeholder="***************" className="rounded-xl border px-4 py-2 w-full"/>
          </form>
        </div>
        </div>
      </div>
          <div className="text-right mx-auto px-3 w-1/4 h-full">
            <p className="py-3 pb-4 text-xs font-medium"><a href="#">Need help with password?</a></p>
          </div>
          <div className="text-center mx-auto px-3 w-1/4 h-full">
              <button className="w-full text-xs bg-black rounded-lg py-2 text-white"><a href="#">Log in</a></button>
              <div className="p-8">
              <p className=" text-xs p-4">Dont&apos;t have an account? <span className="font-bold"><a href="#">Register</a></span></p>
              </div>
          </div>

    </section>
    </main>
    </> 
    );
};