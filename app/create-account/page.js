import Image from "next/image";

export const metadata = {
  title: "CreateAccount",
};
export default function CreateAccount() {
  return (
    <>
    <main>
    {/* Layout */}
    <section className="w-full flex justify-center items-center">
      <div className="">
      <div className="mx-auto px-3 w-full h-full text-left">
        <h1 className=" text-black text-[19px] font-bold">Create an account
        </h1>
        <div className="text-xs">
        <p className="text-xs pt-1 pb-10 font-medium text-gray-600">Kindly create an account to get started</p>
        <div className="">
          <form action="" className="max-width mx-auto pb-3">
            <label className="font-semibold block text-xs pb-2">Legal first name</label>
            <input type="email" placeholder="e.g Jays" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="font-semibold text-xs block pt-5 pb-2">Legal last name</label>
            <input type="password" placeholder="e.g Alimi" className="rounded-xl border px-4 py-2 w-full"/>
          </form>
        </div>
        </div>
      </div>
      <div className="mx-auto px-3 w-full h-full text-left">
        <div className="text-xs">
        <div className="">
          <form action="" className="max-width mx-auto pb-5">
            <label className="font-semibold block text-xs pb-2">Email</label>
            <input type="email" placeholder="e.g example@gmail.com" className="rounded-xl border px-4 py-2 w-full"/>

            
          </form>
        </div>
        </div>
      </div>
      <div className="mx-auto px-3 w-full h-full text-left">
        <div className="text-xs">
        <div className="">
          <form action="" className="max-width mx-auto pb-3">
            <label className="font-semibold block text-xs pb-2">Phone no.</label>
            <input type="email" placeholder="e.g +100 0000 0000" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="font-semibold text-xs block pt-5 pb-2">Password</label>
            <input type="password" placeholder="***************" className="rounded-xl border px-4 py-2 w-full"/>
          </form>
        </div>
        {/* Ticker box */}
            <div className="py-6">
                <form action="" className="mx-auto space-x-3 max-w-sm flex items-center">
                    <input type="checkbox" className="h-6 w-6 border"/>
                    <label htmlFor="" className="text-xs">By continuing, you agreed to our terms and privacy</label>
                </form>
            </div>
        </div>
      </div>
          <div className="text-center mx-auto px-3 w-full h-full">
              <button className="w-full text-xs bg-black rounded-lg py-3 text-white"><a href="#">Continue</a></button>
              <div className="p-8">
              <p className=" text-xs p-4">Already have an account? <span className="font-bold"><a href="#">Log in</a></span></p>
              </div>
          </div>
          </div> 
    </section>
    </main>
    </> 
    );
};