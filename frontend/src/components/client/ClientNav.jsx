import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TbMinusVertical } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../features/auth/authSlice";
import { client_Nav_data } from "../../data/client_Nav_data";

const ClientNav = () => {
  const [focusVal, setFocusVal] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  let navigate = useNavigate();

  const handelLogOUT = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="flex side_padding items-center justify-between">
      {/* Left: Logo + Navigation */}
      <div className="flex items-center gap-10">
        <div className="logo">
          <img width={100} src="/svgs/logo.svg" alt="Logo" />
        </div>

        <ul className="flex cursor-pointer gap-4 items-center">
          {client_Nav_data?.map((item, index) => (
            <li
              key={index}
              className="relative text-sm  flex font-semibold items-center group"
            >
              {item?.title}
              {item?.list && (
                <RiArrowDropDownLine
                  className="transition-all duration-300 group-hover:rotate-180"
                  size={20}
                />
              )}

              {/* Dropdown */}
              {item?.list && (
                <div className="hidden group-hover:block top-[0px]    absolute w-64 pt-8 ">
                  <ul className="nested-ul  group-hover:text-black flex  relative bg-white shadow-xl border border-gray-200 w-fit  px-5   py-3 flex-col gap-2 rounded-lg">
                    {item.list.map((subItem, idx) => (
                      <React.Fragment key={idx}>
                        {/* Title head */}
                        {subItem.title_head && (
                          <li className="font-semibold text-gray-600 ">
                            {subItem.title_head}
                          </li>
                        )}
                        {/* Nested links */}
                        {subItem.title_head_list &&
                          subItem.title_head_list.map((link) => (
                            <li
                              key={link.id}
                              className="pl-3 py-0.5 text-sm hover:underline hover:scale-105 transition-all duration-150 cursor-pointer"
                            >
                              {link.title}
                            </li>
                          ))}
                        {subItem?.type == "divider" && (
                          <div className="w-full  h-[2px] rounded-full my-1 bg-gray-900"></div>
                        )}
                        {/* Separator line */}

                        {/* Direct title (flat list items) */}
                        {subItem.title && (
                          <li className="font-semibold hover:underline cursor-pointer">
                            {subItem.title}
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Search and Jobs dropdown */}
      <div className="flex border border-gray-400 rounded-md gap-3 items-center">
        <div
          onClick={() => setFocusVal("input")}
          className={`flex gap-2 ${
            focusVal === "input" && "border border-gray-800"
          } items-center rounded-md relative`}
        >
          <CiSearch />
          <input
            className="border-0 p-2 outline-0"
            type="text"
            placeholder="Search"
          />
        </div>
        <TbMinusVertical size={20} />
        <button
          onClick={() => setFocusVal("button")}
          className="cursor-pointer p-2 flex items-center"
        >
          Jobs
          <RiArrowDropDownLine size={20} />
        </button>
      </div>

      {/* Logout */}
      <button
        className="text-red-600 underline cursor-pointer"
        onClick={handelLogOUT}
      >
        Logout
      </button>
    </div>
  );
};

export default ClientNav;
