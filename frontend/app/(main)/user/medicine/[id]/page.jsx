"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { getMedicineDetails } from "../../../../../actions/medicine/medicineContriller";

const page = () => {
  const [med, setMed] = useState([]);

  const extractMedicineDetails = async (id) => {
    const data = await getMedicineDetails(id);
    setMed(data.spmed);

    // console.log(data);
  };
  const pathname = usePathname();
  const [last, setLast] = useState("");
  useEffect(() => {
    const parseUrlParams = () => {
      const parts = pathname.split("/");

      const lastPart = parts.pop();
      setLast(lastPart);

      // console.log("Last part of the URL:", lastPart);
    };

    // Call the parseUrlParams function
    parseUrlParams();
    extractMedicineDetails(last);
  });
  return (
    <div className="absolute left-[15vw] w-[85vw] h-[100%] bg-[#E1EEFF] p-[3rem]">
      <div className="w-full bg-[#FFFFFF] h-full flex p-[2rem]">
        <div className="w-2/3 font-[Nunito Sans] text-black">
          <h4 className="text-[3rem] ">{med.name}</h4>
          <p className="text-[1.2rem] mt-[0.3rem]">
            Delivery within <span className="text-[#0360D9]">2 days</span>
          </p>
          <p className="text-[1.2rem] mt-[0.3rem]"> {med.storename}</p>
          <div className="flex justify-evenly relative w-[6rem] mt-[0.3rem]">
            {Array.from({ length: med.rating }).map((index) => (
              <img key={index} src="/filled.png" alt="" />
            ))}
            {Array.from({ length: 5 - med.rating }).map((index) => (
              <img key={index} src="/outlined.png" alt="" />
            ))}
          </div>
          <p className="mt-[3rem] text-[1.4rem]">{med.description}</p>
          <div className="flex w-full justify-start mt-[4rem]">
            <div className="text-[1.2rem]">
              <p>
                Price: <span>${med.price}</span>{" "}
              </p>
              <label className="mt-[0.3rem] mr-[1rem]">Quantity:</label>
              <select id="quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <button className="bg-[#0360D9] p-[1rem] ml-[2rem] w-[8rem]  rounded-md text-[#FFFFFF] text-[1.2rem]">
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <img src="/medicine.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
