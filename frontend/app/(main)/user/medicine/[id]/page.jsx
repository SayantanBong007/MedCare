"use client";
import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  OrderRegister,
  getMedicineDetails,
  getReview,
} from "../../../../../actions/medicine/medicineContriller";
import Link from "next/link";
import { Pencil } from "lucide-react";
import ReviewCard from "../../../../../components/ReviewCard";

const page = () => {
  const [med, setMed] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [last, setLast] = useState("");
  const [revs, SetRevs] = useState([]);

  const pathname = usePathname();

  useEffect(() => {
    const parseUrlParams = () => {
      const parts = pathname.split("/");
      const lastPart = parts.pop();
      setLast(lastPart);
      // No need to log here if not necessary for debugging
    };
    parseUrlParams();
  }, [pathname]); // Adding pathname as dependency if it's used in the effect

  useEffect(() => {
    // Ensure last is truthy before calling the API
    if (last) {
      const extractMedicineDetails = async (id) => {
        try {
          const data = await getMedicineDetails(id);
          setMed(data.spmed);
          // Log data for debugging
          // console.log(data);
        } catch (error) {
          // Handle error if any
          console.error("Error fetching medicine details:", error);
        }
      };
      extractMedicineDetails(last);
    }
  }, [last]); // Run this effect whenever last changes

  useEffect(() => {
    // Ensure last is truthy before calling the API
    if (last) {
      const extractReviews = async (id) => {
        try {
          const data = await getReview(id);
          SetRevs(data.review);
          // Log reviews for debugging
          console.log(data.review);
        } catch (error) {
          // Handle error if any
          console.error("Error fetching reviews:", error);
        }
      };
      extractReviews(last);
    }
  }, [last]); // Run this effect whenever last changes

  return (
    <div className="absolute left-[15vw] w-[85vw] h-[100%] bg-[#E1EEFF] p-[3rem]">
      <div className="w-full bg-[#FFFFFF] h-full overflow-auto  p-[2rem]">
        <div className="flex">
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
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  id="quantity"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <Link
                href={`/user/payment/${last}?price=${med.price}&quantity=${quantity}`}
              >
                <button className="bg-[#0360D9] p-[1rem] ml-[2rem] w-[8rem]  rounded-md text-[#FFFFFF] text-[1.2rem]">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src="/medicine.png" alt="" />
          </div>
        </div>
        <div className="mt-[2.5rem] flex w-full justify-between items-center">
          <h2 className="text-3xl text-black  ">Reviews:</h2>
          <Link href="/user/medicine/id/writereview">
            <button className="bg-[#0360D9] p-[1rem] w-[9rem]  rounded-md text-[#FFFFFF] text-[1.3rem] flex items-center justify-around">
              <Pencil />
              <span>Write</span>
            </button>
          </Link>
        </div>
        <div className="mt-[2rem]">
          {revs.map((rev) => (
            <ReviewCard rate={rev.rating} desc={rev.review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
