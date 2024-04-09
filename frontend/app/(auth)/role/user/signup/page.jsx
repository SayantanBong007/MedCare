"use client";
import { ActionButton } from "@/components/actionButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
// import toast from "react-hot-toast";
import toast from "react-hot-toast"
import { CldImage, CldUploadWidget } from "next-cloudinary";
// import InsertPhotoOutlinedIcon from "@material-ui/icons/InsertPhotoOutlined";\
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import Image from "next/image";

const SignUpPage = () => {
  const router = useRouter();
  const ref = useRef();

  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [userRole, setUserRole] = useState("");
  const [filePreview, setFilePreview] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState({
    publicId: "",
    width: 0,
    height: 0,
    secureURL: "",
  });

  async function handleGoogleRegistrationSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    const { result, message } = await signUpGoogle(accessToken);
    if (result) {
      router.push("/user");
    } else {
      toast.error(message);
    }
    setLoading(false);
  }


  const handleSubmit = async () => {
    try {
      // access image file using ref.current.files[0]
      // convertToBase64 and pass to backend
      setLoading(true);
      if (
        !username ||
        !email ||
        !password ||
        !confirmpassword ||
        !image.secureURL
      ) {
        console.log('plz fill');
        toast.error("Please complete all fields");
      }

      var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (!email.match(mailformat)) {
        toast.error("Invalid email!");
        return;
      }

      if (password.length < 8) {
        toast.error("Password must be atleast 8 characters long");
        return;
      }

      var numberFormat = /^^\d+(\.\d+)?$/;
      if (!height.match(numberFormat) || !weight.match(numberFormat)) {
        /^^\d+(\.\d+)?$/;
        toast.error("Please envter valid numeric values");
        return;
      }
      const { result, message } = await register({
        name: username,
        email,
        password,
        gender,
        country,
        height: parseInt(height),
        weight: parseInt(weight),
        bloodGroup,
        userRole,
        maritalStatus,
        profile_pic: image.secureURL,
      });

      if (result) {
        router.push("/dashboard");
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };



  const onUploadSuccessHandler = (result) => {
    console.log(result);
    setImage(() => ({
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url,
    }));
    console.log(image);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-blue-50">
      <div className="absolute left-6 top-4 flex items-center ">
        {/* <Image src="/logo.png " width={20} height={20} /> */}
        {/* <h1>Caretakr</h1> */}
        <div className="flex flex-row  gap-3">
        <Image src="/logoBluel.png" width="30" height="30"/>
         <h1 className="text-blue-600 text-xl">MedCare</h1>
        </div>
      </div>
      <div className="bg-white rounded-sm w-[60%] h-fit p-8 flex flex-col justify-center align-items ">
        <div className="flex justify-center align-items">
        <h2 className="flex justify-centre item-centre text-6xl mb-[3.5rem] font-bold ">
          {loading ? "Loading..." : "Sign up"}  
        </h2>
          </div>
        <div className="flex flex-col w-[100%] justify-center items-center ">
          <div className="flex flex-col gap-4 text-xl mt-[2rem] pt-[2rem] ">
            <div className=" flex gap-6">
              <div className="flex flex-col gap-4">
                {" "}
                <input
                  type="text"
                  placeholder="Full name"
                  className=" rounded-lg bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className=" rounded-lg bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password min. 8 characters"
                  className=" rounded-lg bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirms"
                  className=" rounded-lg bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
               <input
                  type= "number"
                  placeholder="Contact Number"
                  className="rounded-lg bg-transparent w-[25vw] broder-solid border-2 border-gray-300 hover:border-gray-400 focus:border-gray-400 px-6 py-4 bg-gray-200 "
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
        
      
              </div>

              <div className="w-[15vw] mx-5 my-2 border-2 border-gray-300 rounded-md group hover:border-gray-500 flex items-center justify-center  flex-col h-fit p-5">
                {!image.publicId ? (
                  <div className="flex justify-center items-center flex-col rounded-lg">
                    <CldUploadWidget
                      uploadPreset="jsm_caretakr"
                      onSuccess={onUploadSuccessHandler}
                    >
                      {({ open }) => {
                        return (
                          <PhotoSizeSelectActualOutlinedIcon
                            fontSize="large"
                            className="text-4xl "
                            onClick={() => open()}
                          />
                        );
                      }}
                    </CldUploadWidget>
                    <p className=" mt-2">Upload your image</p>
                  </div>
                ) : (
                  <div className="cursor-pointer overflow-hidden rounded-[10px] flex items-center justify-center rounded-lg">
                    <CldImage
                      cloudName="dcnpnyqvb"
                      width="960"
                      height="600"
                      src={image.publicId}
                      sizes="100vw"
                      alt="Description of my image"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-[2rem] m-auto">
              <ActionButton
                className=" font-bold uppercase text-xl w-[25vw] rounded-lg pb-2"
                onClick={handleSubmit}
                disabled={loading}
              >
                Sign Up
              </ActionButton>
             <br></br>
             
              <div className="m-2">
          Already have an account?
          <Link href="/role/user/signin" className="hover:text-blue-800">
            {" "}
           <span className="text-blue-500"> Sign in </span>   
          </Link>
        </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;