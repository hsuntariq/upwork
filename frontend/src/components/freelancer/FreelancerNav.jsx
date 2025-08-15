import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TbMinusVertical } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../features/auth/authSlice";
import { freelancer_Nav_data } from "../../data/freelancer_Nav_data";

const FreelancerNav = () => {
  const [focusVal, setFocusVal] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  const handelLogOUT = () => {
    dispatch(logOut());

    navigate("/");
  };

  return (
    <>
      <div className="flex side_padding items-center justify-between ">
        <div className="flex items-center gap-10">
          <div className="logo">
            <img width={100} src="/svgs/logo.svg" alt="" />
          </div>
          <ul className="flex cursor-pointer   gap-4 items-center">
            {freelancer_Nav_data?.map((item, index) => {
              return (
                <li
                  className="relative text-sm hover:text-green-500 flex font-semibold  items-center group"
                  key={index}
                >
                  {item?.title}
                  {item?.list && (
                    <RiArrowDropDownLine
                      className="transition-all duration-300 group-hover:rotate-180"
                      size={20}
                    />
                  )}
                  {item?.list && (
                    <div className=" hidden group-hover:block top-[0px]    absolute w-64 pt-8  ">
                      <ul className="nested-ul  group-hover:text-black flex  relative bg-white shadow-xl border border-gray-200 w-fit  px-5   py-3 flex-col gap-2 rounded-lg">
                        {item?.list?.map((item2, index2) => {
                          return (
                            <li
                              key={index2}
                              className="font-semibold hover:underline hover:scale-x-105 transition-all duration-150"
                            >
                              {" "}
                              {item2.title}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex border border-gray-400  rounded-md gap-3 items-center ">
          <div
            onClick={() => setFocusVal("input")}
            className={`flex gap-2 ${
              focusVal == "input" && "border  border-gray-800 "
            } items-center rounded-md relative `}
          >
            <CiSearch className="" />
            <input
              className="border-0   p-2 outline-0"
              type="text"
              placeholder="Search"
            />
          </div>
          <TbMinusVertical size={20} />
          <button
            onClick={() => setFocusVal("button")}
            className="cursor-pointer  p-2 flex items-center"
          >
            Jobs
            <RiArrowDropDownLine size={20} />
          </button>
        </div>
        <button
          className="text-red-600 underline cursor-pointer"
          onClick={handelLogOUT}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default FreelancerNav;
