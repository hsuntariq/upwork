import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const JobFooter = ({ width, content, disabled, link, screenNo, click }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white shadow-xl fixed bottom-0 z-10">
      {/* Progress Bar */}
      <div className="h-[3px] w-full bg-gray-200">
        <div
          className={`${width} h-full bg-black transition-all duration-300`}
        />
      </div>

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 sm:p-6">
        {/* Left Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto ">
          <Button
            onClick={() => navigate(-1)}
            className="!text-green-600 !font-semibold !capitalize hover:!bg-green-700 hover:!text-white "
            style={{ border: "1px solid lightgray" }}
            variant="outlined"
            fullWidth
          >
            Back
          </Button>

          <Button
            className="!text-gray-600 !font-semibold text-nowrap !capitalize !hidden md:!block"
            style={{ border: "0" }}
            variant="outlined"
            fullWidth
          >
            Post Job Using AI
          </Button>
        </div>

        {/* Right Button */}
        <Button
          onClick={
            screenNo == 6 ? click : () => navigate(link)
          }
          disabled={disabled}
          className="!capitalize  hover:!bg-white hover:!text-green-700 !font-semibold"
          style={{
            border: "1px solid lightgray",
            background: disabled ? "gray" : "#00a63e",
            color: "white",
          }}
          variant="outlined"
          fullWidth={window.innerWidth < 640} // full width only on mobile
        >
          {content}
        </Button>
      </div>
    </div>
  );
};

export default JobFooter;
