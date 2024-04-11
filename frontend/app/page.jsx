import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ActionButton } from "../components/actionButton";

const Landingpage = () => {
  return (
    <main className="h-[100vh] w-[100%] flex flex-row bg-blue-100">
      <section className=" flex flex-1 flex-col justify-center items-end p-8 pr-[10rem] w-full">
        <div>
          <div className="flex flex-row items-center gap-8">
            <Image src="/logoBluel.png" alt="logo" width={100} height={100} />
            <span className="text-5xl font-bold">MedCare</span>
          </div>
          <div className="flex flex-col gap-7 mt-[5rem]">
            <h2 className="text-6xl font-bold gap-2 tracking-wide ">
              Find & Search the <br />
              <span className="text-blue-600 mr-2 ">Best Pharmacy</span>near you
            </h2>
            <p className="text-xl text-blue-900 ">
              A platform designed to provide information about <br /> health
              parameters and nearby pharmacy.
            </p>
          </div>
          <div className="mt-[3rem]">
            <Link href="/role">
              <ActionButton className="font-bold uppercase text-xl px-6 py-4 border border-black  bg-blue-600 hover:bg-blue-800 text-white transition-colors duration-100 ">
                start now
              </ActionButton>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-1 flex-col justify-center items-start pl-[10rem] ">
        <Image src="/landing1.png" alt="home_image" width={550} height={550} />
      </section>
    </main>
  );
};

export default Landingpage;
