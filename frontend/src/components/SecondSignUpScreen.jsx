import TextField from "@mui/material/TextField";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { PuffLoader } from "react-spinners";
import axios from "axios";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regUser, userReset } from "../features/auth/authSlice";
import { FaCheck } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SecondSignUpScreen = ({ role, setRole }) => {
  const dispatch = useDispatch();

  const { user, userLoading, userError, userSuccess, userMessage } =
    useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [showpass, setShowPass] = useState(false);
  const [passError, setPassError] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [country, setCountry] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formFields, setFormFields] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    mails: false,
    terms: false,
  });

  const { f_name, l_name, email, password, mails, terms } = formFields;
  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handelRole = () => {
    if (role == "client") {
      setRole("freelancer");
    } else if (role == "freelancer") {
      setRole("client");
    }
  };

  // passwords rules

  useEffect(() => {
    const minLengthRegex = /^.{8,}$/;
    const letterAndNumOrSpecialRegex = /^(?=.*[A-Za-z])(?=.*[\d\W]).+$/;
    if (password === "") {
      setPassError("");
    } else if (!minLengthRegex.test(password)) {
      setPassError("Password must be at least 8 characters");
    } else if (!letterAndNumOrSpecialRegex.test(password)) {
      setPassError(
        "Password should be at least 8 characters, with a symbol or letter"
      );
    } else {
      setPassError("You have strong Password!");
    }
  }, [password]);

  // fetching  all coutreies

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesApi =
        "https://gist.githubusercontent.com/portapipe/a28cd7a9f8aa3409af9171480efcc090/raw/";
      try {
        const { data } = await axios.get(countriesApi);
        setCountriesData(data);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchCountries();
  }, []);

  //custom styling from countries

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "transparent" // no blue when selected
        : state.isFocused
        ? "#f3f4f6" // Tailwind gray-100 on hover
        : "transparent",
      color: "black",
      cursor: "pointer",
      userSelect: "none",
    }),
    control: (provided) => ({
      ...provided,
      minHeight: "55px",
      padding: "2px 4px",
      borderRadius: "8px",
      borderColor: "#d1d5db",
      boxShadow: "none",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#9ca3af",
        borderWidth: 2,
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 8px",
    }),
    singleValue: (provided) => ({
      ...provided,
      userSelect: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "gray",
      fontWeight: 500,
      cursor: "pointer",
    }),
  };

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    } else if (userSuccess) {
      toast.success(`we have send an otp to your Email : ${user.email} `);
      navigate("/otp-verification");
    }
    dispatch(userReset());
  }, [userError, userSuccess]);

  // handling submit button
  const handelSubmitData = async () => {
    setFormSubmitted(true);

    dispatch(
      regUser({ f_name, l_name, email, password, country, terms, mails, role })
    );
  };

  useEffect(() => {
    if (user) {
      navigate("/work");
    }
  }, []);

  return (
    <>
      <div className="h-screen w-full">
        <div className="flex items-center justify-between side_padding">
          <img src="/svgs/logo.svg" alt="" width={100} />

          <div className=" items-center gap-3 hidden md:flex">
            <h4 className=" text-lg">here to hire talet?</h4>

            <button
              onClick={handelRole}
              type="button"
              className="text-green-500 font-semibold hover:underline hover:text-black text-lg cursor-pointer"
            >
              {role == "client" && "Apply as a talent"}
              {role == "freelancer" && "Join as a Client"}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center  py-10 bg-white">
          <div className=" w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%]">
            <h1 className="text-3xl font-semibold text-center mb-6">
              {role == "freelancer" && "Sign up to find work you love"}
              {role == "client" && "Sign up to hire talent"}
            </h1>

            <div className="flex items-center gap-5">
              <h4 className="w-full border border-gray-300 rounded-full py-2 gap-2 text-sm flex justify-center items-center  hover:bg-gray-100">
                <img src="/svgs/apple.svg" alt="" width={20} />
                Continue with Apple
              </h4>
              <h4 className="w-full  border border-gray-300 rounded-full py-2 gap-2 text-sm flex justify-center items-center  hover:bg-gray-100">
                <img src="/svgs/google.svg" alt="" width={20} />
                Continue as Husnain
              </h4>
            </div>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="">
              {/* First Name and Last Name */}

              <div className="flex flex-col lg:flex-row gap-3 my-4 ">
                <div className="w-full relative">
                  <TextField
                    name="f_name"
                    value={f_name}
                    onChange={handleChange}
                    label="First Name"
                    variant="outlined"
                    className="w-full"
                    placeholder="Enter First name"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& input::placeholder": {
                          color: `${
                            formSubmitted && f_name.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`, // default placeholder
                          opacity: 1,
                        },
                        "&.Mui-focused input::placeholder": {
                          color: `${
                            formSubmitted && f_name.trim() === ""
                              ? "red"
                              : "green"
                          }`,
                        },
                        "& fieldset": {
                          borderRadius: "8px",
                          borderColor: `${
                            formSubmitted && f_name.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`,
                        },
                        "&:hover fieldset": {
                          borderColor: `${
                            formSubmitted && f_name.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`,
                          borderWidth: 2,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: `${
                            formSubmitted && f_name.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`,
                          borderWidth: 2,
                        },
                      },
                      "& label": {
                        color: `${
                          formSubmitted && f_name.trim() === ""
                            ? "red"
                            : "#9ca3af"
                        }`, // default label
                      },
                      "& label.Mui-focused": {
                        color: `${
                          formSubmitted && f_name.trim() === ""
                            ? "red"
                            : "green"
                        }`, // label on focus
                      },
                    }}
                  />

                  {formSubmitted && f_name.trim() === "" && (
                    <div className="flex items-center gap-2">
                      <BsExclamationCircle size={20} color="red" />
                      <p className="text-red-500 font-semibold py-1.5 text-[16px]">
                        First name is required
                      </p>
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <TextField
                    name="l_name"
                    value={l_name}
                    onChange={handleChange}
                    label="Last Name"
                    placeholder="Enter last name"
                    variant="outlined"
                    className="w-full"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& input::placeholder": {
                          color: `${
                            formSubmitted && l_name.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`, // default placeholder
                          opacity: 1,
                        },
                        "&.Mui-focused input::placeholder": {
                          color: `${
                            formSubmitted && f_name.trim() === ""
                              ? "red"
                              : "green"
                          }`,
                        },
                        "& fieldset": {
                          borderRadius: "8px",
                          borderColor: `${
                            formSubmitted && l_name.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`,
                        },
                        "&:hover fieldset": {
                          borderColor: `${
                            formSubmitted && l_name.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`,
                          borderWidth: 2,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: `${
                            formSubmitted && l_name.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`,
                          borderWidth: 2,
                        },
                      },
                      "& label": {
                        color: `${
                          formSubmitted && l_name.trim() === ""
                            ? "red"
                            : "#9ca3af"
                        }`, // default label
                      },
                      "& label.Mui-focused": {
                        color: `${
                          formSubmitted && l_name.trim() === ""
                            ? "red"
                            : "green"
                        }`, // label on focus
                      },
                    }}
                  />
                  {formSubmitted && l_name.trim() === "" && (
                    <div className="flex items-center gap-2">
                      <BsExclamationCircle size={20} color="red" />
                      <p className="text-red-500 font-semibold py-1.5 text-[16px]">
                        Last Name is required
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* Email */}
              <div className="my-4 ">
                <TextField
                  name="email"
                  value={email}
                  onChange={handleChange}
                  label={
                    role === "freelancer"
                      ? "Email"
                      : role === "client"
                      ? "Work email address"
                      : ""
                  }
                  variant="outlined"
                  placeholder="Enter you Email"
                  className="w-full  "
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& input::placeholder": {
                        color: `${
                          formSubmitted && email.trim() === "" ? "red" : "green"
                        }`, // default placeholder
                        opacity: 1,
                      },
                      "&.Mui-focused input::placeholder": {
                        color: `${
                          formSubmitted && email.trim() === "" ? "red" : "green"
                        }`,
                      },
                      "& fieldset": {
                        borderRadius: "8px",
                        borderColor: `${
                          formSubmitted && email.trim() === ""
                            ? "red"
                            : "#9ca3af"
                        }`,
                      },
                      "&:hover fieldset": {
                        borderColor: `${
                          formSubmitted && email.trim() === ""
                            ? "red"
                            : "#9ca3af"
                        }`,
                        borderWidth: 2,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: `${
                          formSubmitted && email.trim() === ""
                            ? "red"
                            : "#9ca3af"
                        }`,
                        borderWidth: 2,
                      },
                    },
                    "& label": {
                      color: `${
                        formSubmitted && email.trim() === "" ? "red" : "#9ca3af"
                      }`, // default label
                    },
                    "& label.Mui-focused": {
                      color: `${
                        formSubmitted && email.trim() === "" ? "red" : "green"
                      }
                      `, // label on focus
                    },
                  }}
                />

                {formSubmitted && email.trim() === "" && (
                  <div className="flex items-center gap-2">
                    <BsExclamationCircle size={20} color="red" />
                    <p className="text-red-500 font-semibold py-1.5 text-[16px]">
                      {" "}
                      {role === "freelancer"
                        ? "Email"
                        : role === "client"
                        ? "Work Email address"
                        : ""}{" "}
                      is required
                    </p>
                  </div>
                )}
              </div>
              {/* Password */}
              <div className="w-full my-2 ">
                <div className=" relative">
                  <TextField
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    className="w-full"
                    type={showpass ? "text" : "password"}
                    variant="outlined"
                    placeholder="Password (8 or more characters)"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& input::placeholder": {
                          color: `${
                            formSubmitted && password.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`, // default placeholder
                          opacity: 1,
                        },
                        "&.Mui-focused input::placeholder": {
                          color: `${
                            formSubmitted && password.trim() === ""
                              ? "red"
                              : "green"
                          }`,
                        },
                        "& fieldset": {
                          borderRadius: "8px",
                          borderColor:
                            formSubmitted && password.trim() === ""
                              ? "red"
                              : passError === ""
                              ? "#99a1af"
                              : passError === "You have strong Password!"
                              ? "green"
                              : "#c10007",
                        },
                        "&:hover fieldset": {
                          borderColor: `${
                            formSubmitted && password.trim() === ""
                              ? "red"
                              : "#9ca3af"
                          }`,
                          borderWidth: 2,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor:
                            formSubmitted && password.trim() === ""
                              ? "red"
                              : passError === ""
                              ? "#99a1af"
                              : passError === "You have strong Password!"
                              ? "green"
                              : "#c10007",
                          borderWidth: 2,
                        },
                      },
                      "& label": {
                        color: `${
                          formSubmitted && password.trim() === ""
                            ? "red"
                            : "#9ca3af"
                        }`, // default label
                      },
                      "& label.Mui-focused": {
                        color:
                          formSubmitted && password.trim() === ""
                            ? "red"
                            : passError === ""
                            ? "green"
                            : passError === "You have strong Password!"
                            ? "green"
                            : "#c10007", // label on focus
                      },
                    }}
                  />
                  <div
                    onClick={() => setShowPass(!showpass)}
                    className="absolute right-3 top-1/2 -translate-1/2 cursor-pointer"
                  >
                    {showpass ? (
                      <IoEyeOutline size={22} />
                    ) : (
                      <IoEyeOffOutline size={22} />
                    )}
                  </div>
                </div>

                {formSubmitted && password.trim() === "" ? (
                  <div className="flex items-center gap-2">
                    <BsExclamationCircle size={20} color="red" />
                    <p className="text-red-500 font-semibold py-1.5 text-[16px]">
                      Password is required
                    </p>
                  </div>
                ) : (
                  <p
                    className={`py-2 font-semibold  ${
                      passError == "You have strong Password!"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {passError}
                  </p>
                )}
              </div>

              {/* Country */}
              <div className="cursor-pointer w-full">
                <Select
                  styles={customStyles}
                  placeholder="Select your country"
                  className="placeholder:text-gray-900 placeholder:font-semibold cursor-pointer"
                  options={countriesData.map((item) => ({
                    value: item.code,
                    label: (
                      <div className="flex items-center gap-2 select-none">
                        <img
                          src={`data:image/png;base64,${item.flag}`}
                          alt="flag"
                          className="w-6 h-4"
                        />
                        <span>{item.name}</span>
                      </div>
                    ),
                    countryData: item,
                  }))}
                  onChange={(selected) => {
                    if (selected) {
                      setCountry(selected.countryData.name);
                    }
                  }}
                />
              </div>

              {/* Send Mails */}

              <div className="flex  items-start text-sm gap-2 my-4 select-none">
                <label className="cursor-pointer mt-1">
                  <input
                    name="mails"
                    value={mails}
                    onChange={handleChange}
                    type="checkbox"
                    className="mt-1 hidden"
                  />

                  <span
                    className={`w-4 h-4  p-[2px]  outline-2 rounded-xs outline-gray-500 flex items-center justify-center  ${
                      mails && "outline-green-700"
                    } `}
                  >
                    <FaCheck
                      color="green"
                      className={` opacity-0 ${mails && "opacity-100"} `}
                    />
                  </span>
                </label>
                <span className="pointer-events-none text-[16px] text-gray-600 font-semibold ">
                  Send me helpful emails to find rewarding work and job leads.
                </span>
              </div>
              {/* Terms */}
              <div className="flex flex-col items-start text-sm gap-2 my-4 select-none">
                <div className="flex  gap-2">
                  <label className="cursor-pointer mt-1">
                    <input
                      name="terms"
                      value={terms}
                      onChange={handleChange}
                      type="checkbox"
                      className="mt-1 hidden"
                    />

                    <span
                      className={`w-4 h-4  p-[2px]  outline-2 rounded-xs outline-gray-500 flex items-center justify-center  ${
                        formSubmitted && !terms
                          ? "outline-red-500"
                          : "outline-green-700"
                      } `}
                    >
                      <FaCheck
                        color="green"
                        className={` opacity-0 ${terms && "opacity-100"} `}
                      />
                    </span>
                  </label>
                  <span className="pointer-events-none text-[16px] text-gray-600 font-semibold ">
                    Yes, I understand and agree to the{" "}
                    <a href="#" className="text-green-600 underline">
                      Upwork Terms of Service
                    </a>
                    , including the{" "}
                    <a href="#" className="text-green-600 underline">
                      User Agreement
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-green-600 underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </div>

                <div className="">
                  {formSubmitted && !terms && (
                    <div className="flex items-center justify-center gap-2 ">
                      {" "}
                      <BsExclamationCircle size={20} color="red" />
                      <p className="text-red-500 font-semibold py-1.5 text-[16px]">
                        Please accept the Upwork Terms of Service before
                        continuing
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={handelSubmitData}
              type="button"
              className={`w-full mt-5 flex items-center font-semibold cursor-pointer justify-center  gap-2.5  py-2 rounded-md  ${
                userLoading
                  ? "hover:bg-gray-400 bg-gray-300 text-white"
                  : "hover:bg-green-700 bg-green-600 text-white"
              }   `}
            >
              {userLoading ? (
                <>
                  {" "}
                  Creating your account <PuffLoader
                    size={20}
                    color="white"
                  />{" "}
                </>
              ) : (
                "    Create my account"
              )}
            </button>

            {/* Log in link */}
            <p className="text-center mt-4 text-sm">
              Already have an account?
              <a href="#" className="text-green-600 underline">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSignUpScreen;
