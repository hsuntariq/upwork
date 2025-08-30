import React from "react";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

import { Button } from "@mui/material";
import { TbFlagPlus } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import ClientNav from "../components/client/ClientNav";
const Work = () => {
  const { user } = useSelector((state) => state.auth);
  
const navigate = useNavigate()

  if (!user.role === "client") {
   navigate("/")
  }
  console.log(user.role);
  
  return (
    <>
      <ClientNav />

      <div className="flex container mx-auto justify-between items-center side_padding">
        <h1 className="text-2xl">
          Assalam o Alaikum, {user?.f_name} {user?.l_name}
        </h1>
        <Link to="/first-job-section">
          <Button
            className="flex gap-2"
            style={{ background: "oklch(72.3% 0.219 149.579)" }}
            variant="contained"
          >
            <FaPlus /> Post Job
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Work;
