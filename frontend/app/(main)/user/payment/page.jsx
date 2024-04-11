"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Image from "next/image";

const PaymentPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [product] = useState({
    _id: 1,
    name: "Dolo 250",
    price: 10,
    quantity: 2,
  });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
  });
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

        await axios.post("http://localhost:4000/api/v1/message", data);

        router.push("http://localhost:3000/user/profile");
        
    } else {
      console.log("Payment failed");
    }

    setLoading(false);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-blue-100">
      <div className="absolute left-6 top-4 flex items-center ">
        <div className="flex flex-row  gap-3">
          <h1 className="text-blue-600 text-xl">MedCare</h1>
        </div>
      </div>

      <div className="bg-white rounded-sm w-[40%] h-fit p-8 flex flex-col justify-center align-items">
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
                    {product.name} - ₹{product.price}
                  </p>
                  <p style={{ marginBottom: "20px" }}>
                    Quantity - {product.quantity}
                  </p>
                  <p style={{ marginBottom: "40px" }}>
                    Final Price -{" "}
                    <b style={{ fontSize: "2.4em" }}>
                      ₹{product.price * product.quantity}
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
