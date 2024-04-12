"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getUser } from "../../../../../../actions/user/userController";
import { postReview } from "../../../../../../actions/medicine/medicineContriller";
import { useRouter } from "next/navigation";

const page = () => {
  const [last, setLast] = useState("");
  const pathname = usePathname();
  const [user, setUser] = useState([]);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [result, setResult] = useState({});

  const router = useRouter();

  const extractdata = async () => {
    const data = await getUser();
    setResult(data);
    // setUser(result.user);
    console.log(data);
  };

  useEffect(() => {
    extractdata();
  }, []);

  useEffect(() => {
    if (result) {
      setUser(result.user);
    }
  }, [result]);
  //   console.log(user)

  useEffect(() => {
    const parseUrlParams = () => {
      const parts = pathname.split("/");
      var lastPart = parts[3];
      //   lastPart = lastPart.pop();
      console.log(lastPart);
      setLast(lastPart);
    };
    parseUrlParams();
  }, [pathname]);
  const exportReview = (obj) => {
    postReview(obj);
  };
  const handleSubmit = () => {
    const obj = {
      rating: rating,
      review: review,
      author: user._id,
      medicine: last,
    };
    exportReview(obj);

    router.back();
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-blue-100  flex items-center justify-center">
      <div className="h-max w-[43rem] p-[2rem] bg-white rounded-xl text-black">
        <h1 className="text-[3rem] font-bold ml-[6rem]">Write your review</h1>
        <div className="mt-[3rem]">
          <h4 className="text-2xl font-semibold ml-[16rem]">Rating:-</h4>
          <input
            onChange={(e) => {
              setRating(e.target.value);
            }}
            value={rating}
            className="h-[3rem] w-[27rem] border-2 border-black rounded-md ml-[6rem] mt-[0.5rem]"
            defaultValue={3}
            min={1}
            max={5}
            type="number"
          />
          <h4 className="text-2xl font-semibold ml-[16rem] mt-[2rem] ">
            Review:-
          </h4>
          <input
            onChange={(e) => {
              setReview(e.target.value);
            }}
            value={review}
            className="h-[3rem] w-[27rem] border-2 border-black rounded-md ml-[6rem] mt-[0.5rem]"
            type="text"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-[9rem] h-[3rem] ml-[14rem] mt-[3rem] text-white bg-[#0360D9] text-xl rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default page;
