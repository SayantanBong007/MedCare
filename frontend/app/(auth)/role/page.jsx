import React from "react";
import Link from "next/link";

const page = () => {
  // console.log(loginIcon)
  return (
    <div className="bg-[#E1EEFF] w-[100vw] h-[100vh] flex justify-center">
      <div className="w-[90%] p-[2rem]">
        <div className="flex items-center justify-start h-[4rem] w-[10rem]">
          <img className="w-[2rem] h-[2rem]" src="/logoBluel.png" alt="" />
          <h2 className="text-[#0360D9] font-semibold text-[2rem] font-['Nunito_Sans']">
            MedCare
          </h2>
        </div>
        <div className="mt-[10rem] w-full h-[12rem] flex justify-around">
          <div className="h-[20rem] w-[20rem]">
            <div className="p-[1rem] w-full h-full border-2 border-[#0360D9] flex justify-center items-center shadow-sm  rounded-sm hover:shadow-lg">
              <img className="w-full h-full" src="/cuate.png" alt="" />
            </div>
            <Link href="/role/user/signup">
              <button className="mt-[2rem] rounded-md w-full flex h-[2rem] justify-center items-center bg-[#0360D9] text-[#FFFFFF] font-semibold font-['Nunito_Sans']">
                User Login
              </button>
            </Link>
          </div>
          <div className="h-[20rem] w-[20rem]">
            <div className="p-[1rem] w-full h-full border-2 border-[#0360D9] flex justify-center items-center shadow-sm  rounded-sm hover:shadow-lg">
              <img className="w-full h-full" src="/doctor.png" alt="" />
            </div>
            <Link href="/role/manager/signin">
              <button className="mt-[2rem] rounded-md w-full flex h-[2rem] justify-center items-center bg-[#0360D9] text-[#FFFFFF] font-semibold font-['Nunito_Sans']">
                Manager Login
              </button>
            </Link>
          </div>
          <div className="h-[20rem] w-[20rem]">
            <div className="p-[1rem] w-full h-full border-2 border-[#0360D9] flex justify-center items-center shadow-sm  rounded-sm hover:shadow-lg">
              <img className="w-full h-full" src="/Character.png" alt="" />
            </div>
            <Link href="/role/ceo/signin">
              <button className="mt-[2rem] rounded-md w-full flex h-[2rem] justify-center items-center bg-[#0360D9] text-[#FFFFFF] font-semibold font-['Nunito_Sans']">
                Ceo Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
