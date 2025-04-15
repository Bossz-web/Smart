import Image from "next/image";

export const metadata = {
  title: "Email sent - Smart+CARD",
};
export default function EmailSent() {
  return (
    <>
    <main>
      <section className="text-center">
        <div className="justify-center items-center flex pt-32">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </div>
      <div className=""> 
      <h2 className="text-center text-[20px] font-medium py-3">Email sent</h2>
          <p className="text-xs">We've successfully sent a LINK to your email. Please <br /> check your email to complete your KYC verification</p>
      </div>
      </section>
    </main>
  

    </>
  )
};