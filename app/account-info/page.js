import Image from "next/image";

export const metadata = {
  title: "Account info",
};
export default function AccountInfo() {
  return (
    <>
    <main className="py-8">
    <div className="mx-auto px-3 w-1/4 h-full text-left">
        <h1 className=" text-black text-[19px] font-medium font-bold">Account info.</h1>
        <div className="text-xs">
        <p className="text-xs pt-1 pb-10 font-medium text-gray-600">Please kindly enter your account info. below</p>
        <div className="">
          <form action="" className="max-width mx-auto pb-3">
            <label for="country" className="font-semibold block text-xs pb-2">Country</label>
            {/* <select name="country" id="country">
            <input type="Country" placeholder="Canada" className="rounded-xl border px-4 py-2 w-full form-control"/>
              <option value="canada">Canada</option>
              <option value="america">Canada</option>
              <option value="france">Canada</option>
              <option value="nigeria">Canada</option>
              <option value="Italy">Canada</option>
              <option value="mexico">Canada</option>
            </select> */}
            <input type="Country" placeholder="Canada" className="rounded-xl border px-4 py-2 w-full form-control"/>

            <label className="font-semibold text-xs block py-5">State</label>
            <input type="text" placeholder="Ontario" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="font-semibold block text-xs py-5">City</label>
            <input type="text" placeholder="Stratford" className="rounded-xl border px-4 py-2 w-full"/>
          </form>
          {/* Two inputs fields*/}
          <div className="flex space-x-4 py-5">
              <form action="" className="">
              <label htmlFor="" className="block">House no.</label>
              <input type="number" placeholder="e.g 827" className="rounded-xl border px-4 py-2 w-full pb-"/>
              </form>
              <form action="" className="w-full">
              <label htmlFor="" className="block">Street</label>
              <input type="text" placeholder="e.g albert street" className="rounded-xl border px-4 py-2 w-full"/>
              </form>
          </div>
          {/*  */}

          <form action="" className="max-width mx-auto py-5">
            <label className="font-semibold block text-xs pb-2">Address</label>
            <input type="address" placeholder="e.g 827 albert street" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="font-semibold text-xs block py-5">Zip code</label>
            <input type="number" placeholder="e.g N5A 3K5" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="font-semibold block text-xs py-5">Date of birth</label>
            <input type="date" placeholder="DD//MM/YY" className="rounded-xl border px-4 py-2 w-full uppercase"/>

            <label className="font-semibold block text-xs py-5">ID.type</label>
            <input type="number" placeholder="e.g National ID" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="font-semibold text-xs block py-5">ID.no</label>
            <input type="tel" placeholder="e.g 1234567890" className="rounded-xl border px-4 py-2 w-full"/>

            <label className="font-semibold block text-xs py-5">ID.image</label>
            <input type="" placeholder="Choose file" className="rounded-xl border text-center px-4 py-2 w-full capitalize"/>
          </form>
          <div className="text-center mx-auto py-5 h-full">
              <button className="w-full text-xs bg-black rounded-lg py-3 text-white">
                <a href="#">Continue</a>
              </button>
          </div>
        </div>
        </div>
        
      </div>
    </main>

    </>
  )
};