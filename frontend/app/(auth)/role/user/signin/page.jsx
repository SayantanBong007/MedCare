"use client";
import { ActionButton } from "../../../../../components/actionbutton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { getUser, login } from "../../../../../actions/user/userController";
const SignInPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      setLoading(true);
      if (!user.email || !user.password) {
        toast.error("Please complete the fields !");
        return;
      }
      const { success, message } = await login({
        email: user.email,
        username: user.username,
        password: user.password,
      });
      console.log(success);
      if (success) {
        extractdata();
        console.log(luser);
        const rolestring = JSON.stringify(luser.role);
        localStorage.setItem("role", rolestring);
        const namestring = JSON.stringify(luser.fullName);
        localStorage.setItem("name", namestring);
        const phonestring = JSON.stringify(luser.phone);
        localStorage.setItem("phone", phonestring);
        const emailstring = JSON.stringify(luser.email);
        localStorage.setItem("email", emailstring);
        if (luser.role == "user") {
          router.push("/user");
        } else if (luser.role == "manager") {
          router.push("/manager");
        } else if (luser.role == "ceo") {
          router.push("/ceo");
        }
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log("Signin failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const [luser, setluser] = useState({});
  const extractdata = async () => {
    const result = await getUser();
    setluser(result.user);
  };

  // useEffect(() => {
  //   extractdata();
  //   console.log(luser);
  // }, []);

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-blue-100">
      <div className="absolute left-6 top-4 flex items-center ">
        <div className="flex flex-row  gap-3">
          <Image src="/logoBluel.png" width="30" height="30" />
          <h1 className="text-blue-600 text-xl">MedCare</h1>
        </div>
      </div>

      <div className="bg-white rounded-sm w-[40%] h-fit p-8 flex flex-col justify-center align-items">
        <div className="flex justify-center items-center mt-5 pt-10">
          <h2 className="text-6xl mb-[3.5rem] font-bold">
            {loading ? "Loading..." : "Sign in"}
          </h2>
        </div>

        <div className="flex flex-col w-[100%] justify-center items-center  ">
          <div className=" flex flex-col gap-4 text-xl  pt-[2.5rem] ">
            <div className="flex flex-col gap-4">
              <input
                type="username"
                placeholder="User Name"
                className="bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password min. 8 characters"
                className="bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="mt-[1rem] m-auto">
              <ActionButton
                className=" font-bold uppercase text-xl w-[25vw]"
                onClick={handleLogin}
                disabled={loading}
              >
                Sign In
              </ActionButton>
              <br></br>

              <div className="m-2">
                Don't have an account?
                <Link href="/role/user/signup" className="hover:text-blue-800">
                  {" "}
                  <span className="text-blue-600"> Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
