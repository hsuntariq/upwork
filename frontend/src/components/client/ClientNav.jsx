import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../features/auth/authSlice";
import { client_Nav_data } from "../../data/client_Nav_data";
import { Button } from "@mui/material";

const ClientNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState( false );
  const [activeDropdown, setActiveDropdown] = useState( null );
  const [searchQuery, setSearchQuery] = useState( "" );
  const [focusVal, setFocusVal] = useState( "" ); // for highlighting search/jobs
  const dispatch = useDispatch();
  const { user } = useSelector( ( state ) => state.auth );
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch( logOut() );
    navigate( "/" );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen( !isMobileMenuOpen );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between side_padding py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            width={100}
            src="/svgs/logo.svg"
            alt="Logo"
            className="cursor-pointer"
            onClick={() => navigate( "/" )}
          />


        </div>


        <Link to='/chat'>

          <Button variant="contained">
            Chat
          </Button>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex cursor-pointer gap-6 items-center">
          {client_Nav_data?.map( ( item, index ) => (
            <li
              key={index}
              className="relative text-sm flex font-semibold items-center group"
              onMouseEnter={() => setActiveDropdown( index )}
              onMouseLeave={() => setActiveDropdown( null )}
            >
              {item?.title}
              {item?.list && (
                <RiArrowDropDownLine
                  className={`ml-1 transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""
                    }`}
                  size={20}
                />
              )}

              {/* Dropdown */}
              {item?.list && (
                <div
                  className={`absolute top-full left-0 w-64 pt-3 transition-all duration-300 ${activeDropdown === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                    }`}
                >
                  <ul className="bg-white shadow-xl border border-gray-200 w-fit px-5 py-3 flex-col gap-2 rounded-lg">
                    {item.list.map( ( subItem, idx ) => (
                      <React.Fragment key={idx}>
                        {subItem.title_head && (
                          <li className="font-semibold text-gray-600">
                            {subItem.title_head}
                          </li>
                        )}
                        {subItem.title_head_list &&
                          subItem.title_head_list.map( ( link ) => (
                            <li
                              key={link.id}
                              className="pl-3 py-0.5 text-sm text-gray-600 hover:text-gray-900 hover:underline hover:scale-105 transition-all duration-150 cursor-pointer"
                            >
                              {link.title}
                            </li>
                          ) )}
                        {subItem?.type === "divider" && (
                          <div className="w-full h-[1px] my-2 bg-gray-300"></div>
                        )}
                        {subItem.title && (
                          <li className="font-semibold hover:underline cursor-pointer">
                            {subItem.title}
                          </li>
                        )}
                      </React.Fragment>
                    ) )}
                  </ul>
                </div>
              )}
            </li>
          ) )}
        </ul>

        {/* Search + Jobs + Logout (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <div
            onClick={() => setFocusVal( "input" )}
            className={`relative flex items-center border rounded-md transition-colors ${focusVal === "input" ? "border-gray-800" : "border-gray-300"
              }`}
          >
            <CiSearch className="ml-2 text-gray-500" size={20} />
            <input
              className="p-2 w-48 text-sm outline-none bg-transparent"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={( e ) => setSearchQuery( e.target.value )}
            />
          </div>
          <TbMinusVertical size={20} className="text-gray-400" />
          <button
            onClick={() => setFocusVal( "button" )}
            className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            Jobs
            <RiArrowDropDownLine className="ml-1" size={20} />
          </button>
          <button
            onClick={handleLogout}
            className="text-red-600 font-semibold hover:underline"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-gray-900 text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200 p-4 space-y-4">
          {/* Nav links */}
          <ul className="flex flex-col gap-3">
            {client_Nav_data?.map( ( item, index ) => (
              <li key={index} className="text-sm font-semibold">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    setActiveDropdown( activeDropdown === index ? null : index )
                  }
                >
                  {item?.title}
                  {item?.list && (
                    <RiArrowDropDownLine
                      className={`transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""
                        }`}
                      size={20}
                    />
                  )}
                </div>
                {item?.list && activeDropdown === index && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.list.map( ( subItem, idx ) => (
                      <React.Fragment key={idx}>
                        {subItem.title_head && (
                          <li className="font-semibold text-gray-600">
                            {subItem.title_head}
                          </li>
                        )}
                        {subItem.title_head_list &&
                          subItem.title_head_list.map( ( link ) => (
                            <li
                              key={link.id}
                              className="pl-3 py-0.5 text-sm hover:underline"
                            >
                              {link.title}
                            </li>
                          ) )}
                        {subItem.title && (
                          <li className="font-semibold hover:underline cursor-pointer">
                            {subItem.title}
                          </li>
                        )}
                      </React.Fragment>
                    ) )}
                  </ul>
                )}
              </li>
            ) )}
          </ul>

          {/* Search */}
          <div className="flex border border-gray-400 rounded-md gap-2 items-center px-2 py-1">
            <CiSearch />
            <input
              className="border-0 p-2 outline-0 w-full"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={( e ) => setSearchQuery( e.target.value )}
            />
          </div>

          {/* Jobs */}
          <button className="w-full flex items-center justify-between border border-gray-400 rounded-md px-2 py-2">
            Jobs
            <RiArrowDropDownLine size={20} />
          </button>

          {/* Logout */}
          <button
            className="text-red-600 underline cursor-pointer w-full text-left"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default ClientNav;
