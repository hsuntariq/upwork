import React, { useEffect, useState } from "react";
import SecondSignUpScreen from "./SecondSignUpScreen";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FirstSignUpScreen = () => {
  const [role, setRole] = useState("");
  let [secondScreen, setSecondScreen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/work");
    }
  }, []);
  return (
    <>
      {secondScreen ? (
        <SecondSignUpScreen role={role} setRole={setRole} />
      ) : (
        <>
          <div className="w-full h-screen fixed top-0  side_padding">
            <img src="/svgs/logo.svg" alt="" width={100} />

            <div className="flex gap-5  justify-center items-center flex-col mx-auto pt-10  w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
              <h1 className="text-4xl">Join as a client or freelancer</h1>

              <div className="flex flex-col md:flex-row items-center gap-5">
                <div
                  onClick={() => setRole("client")}
                  className={`border active:scale-95 hover:bg-[#F9F9F9] w-full   p-5 ${
                    role == "client"
                      ? "border-black outline-2 "
                      : "border-gray-500"
                  } rounded-md cursor-pointer transition-all duration-100 hover:outline-2`}
                >
                  <div className="flex items-center justify-between">
                    <img src="/icons/clientIcone.svg" alt="" width={40} />

                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          className="hidden "
                          checked={role == "client"}
                          value={role}
                          onChange={(e) => setRole("client")}
                          name="role"
                        />

                        <span
                          className={`w-6 h-6 rounded-full border-2  flex items-center justify-center ${
                            role == "client"
                              ? "border-green-500 border-double"
                              : "border-gray-600"
                          } `}
                        >
                          <span
                            className={`w-3 h-3 rounded-full ${
                              role == "client" ? "bg-green-500" : "bg-white"
                            } transition-colors`}
                          ></span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <h3 className="text-2xl text-start font-semibold pt-3">
                    I'm a client, hiring for a project
                  </h3>
                </div>

                {/*  */}

                <div
                  onClick={() => setRole("freelancer")}
                  className={`border active:scale-95 hover:bg-[#F9F9F9] p-5 w-full ${
                    role == "freelancer"
                      ? "border-black  outline-2"
                      : "border-gray-500"
                  } rounded-md cursor-pointer transition-all duration-100 hover:outline-2`}
                >
                  <div className="flex items-center justify-between">
                    <img src="/icons/freelancericone.svg" alt="" width={40} />

                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          className="hidden peer"
                          checked={role == "freelancer"}
                          value={role}
                          onChange={(e) => setRole("freelancer")}
                          name="role"
                        />

                        <span
                          className={`w-6 h-6 rounded-full border-2  flex items-center justify-center ${
                            role == "freelancer"
                              ? "border-green-500 border-double"
                              : "border-gray-600 "
                          } `}
                        >
                          <span
                            className={`w-3 h-3 rounded-full ${
                              role == "freelancer" ? "bg-green-500" : "bg-white"
                            } transition-colors`}
                          ></span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <h3 className="text-2xl text-start font-semibold pt-3">
                    I'm a freelancer, looking for work{" "}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSecondScreen(true)}
                type="button"
                disabled={!role}
                className={`${
                  role
                    ? "bg-green-700 text-white cursor-pointer"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                } px-5 font-semibold py-2.5 rounded-md   mt-10`}
              >
                {role == ""
                  ? "Create New Account"
                  : role == "client"
                  ? "Join as a Client"
                  : "Apply as a Freelancer"}
              </button>

              <p className="text-center  ">
                Already have an account?{" "}
                <span className="text-green-700 underline font-semibold cursor-pointer">
                  Log in
                </span>{" "}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FirstSignUpScreen;
