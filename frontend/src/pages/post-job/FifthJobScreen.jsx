import React, { useContext, useState } from "react";
import ClientNav from "../../components/client/ClientNav";
import JobFooter from "../../components/client/JobFooter";
import { CiStopwatch } from "react-icons/ci";
import { JobContext } from "../../context/JobContext";

const FifthJobSection = () => {
  const { rate, setRate } = useContext(JobContext)

  return (
    <>
      <ClientNav />
      <div className="w-[90%] py-10 gap-10 side_padding xl:w-[60%] lg:w-[75%] mx-auto grid grid-cols-12">
        {/* Left Content */}
        <div className="lg:col-span-6 col-span-12 space-y-3">
          <p className="text-gray-500 text-sm">4/5 Job Post</p>
          <h2 className="text-3xl font-semibold">Tell us about your budget</h2>
          <p className="text-gray-500 text-base">
            This will help us match you to talent within your range.
          </p>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 col-span-12 flex flex-col gap-6">
          {/* Toggle Options */}
          <div className="grid grid-cols-2 gap-4">
            <label
              onClick={() => setRate("hourly")}
              htmlFor="hourly"
              className={`border-2 rounded-xl cursor-pointer p-6 transition hover:shadow-md ${rate === "hourly"
                ? "border-green-600 bg-green-50"
                : "border-gray-200 bg-white"
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <CiStopwatch className="text-xl text-green-600" />
                  <h4 className="font-semibold text-gray-700">Hourly Rate</h4>
                </div>
                <input
                  checked={rate === "hourly"}
                  onChange={() => setRate("hourly")}
                  type="radio"
                  name="rate"
                  id="hourly"
                  className="w-5 h-5 accent-green-600"
                />
              </div>
            </label>

            <label
              onClick={() => setRate("fixed")}
              htmlFor="fixed"
              className={`border-2 rounded-xl cursor-pointer p-6 transition hover:shadow-md ${rate === "fixed"
                ? "border-green-600 bg-green-50"
                : "border-gray-200 bg-white"
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <CiStopwatch className="text-xl text-green-600" />
                  <h4 className="font-semibold text-gray-700">Fixed Rate</h4>
                </div>
                <input
                  checked={rate === "fixed"}
                  onChange={() => setRate("fixed")}
                  type="radio"
                  name="rate"
                  id="fixed"
                  className="w-5 h-5 accent-green-600"
                />
              </div>
            </label>
          </div>

          {/* Hourly Form */}
          {rate === "hourly" && (
            <div className="space-y-5">
              <div className="flex justify-between items-center gap-6">
                <div className="flex flex-col w-1/2">
                  <label className="text-gray-600 text-sm mb-1">From</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue="$200.00"
                      className="border border-gray-300 w-full rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    />
                    <span className="text-gray-600">/hr</span>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <label className="text-gray-600 text-sm mb-1">To</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      defaultValue="$250.00"
                      className="border border-gray-300 w-full rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    />
                    <span className="text-gray-600">/hr</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                Professionals tend to charge{" "}
                <b className="text-black">$10 - $25</b>/hour (USD) for graphic
                design projects like yours. Experts may charge higher rates.
              </p>
            </div>
          )}

          {/* Fixed Form */}
          {rate === "fixed" && (
            <div className="space-y-5">
              <p className="text-gray-600 text-base">
                Set a price for the project and pay at the end, or divide it
                into milestones and pay as each milestone is completed.
              </p>
              <div>
                <label className="font-semibold text-gray-700">
                  What is the best cost estimate for your project?
                </label>
                <p className="text-gray-500 text-sm">
                  You can negotiate this cost and create milestones when you
                  chat with your freelancer.
                </p>
              </div>
              <input
                type="text"
                defaultValue="0"
                className="border border-gray-300 w-1/3 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>
          )}
        </div>
      </div>

      <JobFooter
        width="w-4/5"
        content={"Next: Scope"}
        link={"/sixth-job-section"}
      />
    </>
  );
};

export default FifthJobSection;
