"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  OrderRegister,
  getMedicineDetails,
} from "../../../../../actions/medicine/medicineContriller";

const PaymentPage = () => {
  const router = useRouter();

  const searhParams = useSearchParams();
  const price = searhParams.get("price");
  const quantity = searhParams.get("quantity");
  const name = searhParams.get("name");

  console.log(price);
  console.log(quantity);

  const [loading, setLoading] = useState(false);
  const [product] = useState({
    _id: 1,
    name: name,
    price: price,
    quantity: quantity,
  });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
  });

  const email = JSON.parse(localStorage.getItem("email"));
  const [user, setUser] = useState({
    to: "jainaviral2002@gmail.com",
    subject: "Invoice for your purchase at MedCare",
    description: "",
  });
  const [msg, setMsg] = useState("");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleToken = async (token) => {
    setLoading(true);
    console.log("Selected Product:", product.name);
    console.log("Quantity:", product.quantity);
    console.log("Token:", token);

    // Simulate payment processing
    console.log("Simulating payment processing...");

    // Handle payment success or failure
    const paymentSuccess = 1;
    if (paymentSuccess) {
      console.log("Payment successful");
      setUser({
        ...user,
        description: `You have successfully purchased ${product.name} for ₹${
          product.price * product.quantity
        }`,
      });

      await axios
        .post("http://localhost:4000/api/v1/reciept", user)
        .then((response) => setMsg(response.data.respMesg));

      // await axios.post("http://localhost:4000/api/v1/message", data);

      router.push("/user/confirmorders");
    } else {
      console.log("Payment failed");
    }

    setLoading(false);
  };

  const [last, setLast] = useState("");
  const [med, setMed] = useState({});
  const extractMedicineDetails = async (id) => {
    const data = await getMedicineDetails(id);
    setMed(data.spmed);
  };

  const pathname = usePathname();

  // Triggered when last changes

  useEffect(() => {
    const parseUrlParams = () => {
      const parts = pathname.split("/");

      const lastPart = parts.pop();
      setLast(lastPart);
      console.log("Last part of the URL:", lastPart);
    };
    parseUrlParams();
    // Call the parseUrlParams function
  }, []);
  console.log(last);
  return (
    <div className="h-[100vh] w-[85vw] flex items-center justify-center bg-blue-100">
      <div className="absolute left-6 top-4 flex items-center ">
        <div className="flex flex-row  gap-3"></div>
      </div>

      <div className="bg-white rounded-lg w-[45%] h-fit p-8 flex flex-col justify-center align-items shadow-lg border-2 border-blue-500 ">
        <div className="flex justify-center items-center mt-5 pt-10">
          <h2 className="text-6xl mb-[3.5rem] font-bold">
            {loading ? "Loading..." : "GPay"}
          </h2>
        </div>

        <div className="flex flex-col w-[100%] justify-center items-center ">
          <div className=" flex flex-col gap-4 text-xl  pt-[2.5rem] ">
            <div className="flex flex-col gap-4">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <Image src="/pana.png" width="250" height="250" />
                </div>

                <div style={{ marginLeft: "20px" }}>
                  <p>
                    {product.name} - ${product.price}
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    Quantity - {product.quantity}
                  </p>
                  <p style={{ marginBottom: "40px" }}>
                    Final Price -{" "}
                    <b style={{ fontSize: "2.4em" }}>
                      ${product.price * product.quantity}
                    </b>
                  </p>
                </div>
              </div>
            </div>

            <StripeCheckout
              stripeKey="pk_test_51P3c9LSDP9qDW8FBCE6VZ3dT7Tg1jsxbde2WN2kS6WqVCEz1dbegVc5ZnXDGgRS6EtJg6kvfjU0uJoYdoETmVaIo00sF1hZ4pK"
              token={handleToken}
              currency="INR"
              name="MedCare"
              email="jainaviral2002@gmail.com"
              amount={product.price * product.quantity * 100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
