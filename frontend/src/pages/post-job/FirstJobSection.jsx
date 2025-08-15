import React, { useContext, useState } from "react";
import { JobContext } from "../../context/JobContext";
import { FaCalendar } from "react-icons/fa";
import ClientNav from "../../components/client/ClientNav";

const FirstJobSection = () => {
  const [projectType, setProjectType] = useState("");

  console.log(projectType);

  return (
    <>
      <ClientNav />

      <div className="flex flex-col w-[90%] gap-5 side_padding justify-center xl:w-[70%] lg:w-[85%] md:flex-row mx-auto md:justify-between ">
        <h1 className="text-2xl w-full md:w-[30%]">
          How can we help you get started?
        </h1>
        <ul className="flex unstyled w-full flex-col md:w-[70%]">
          <li>
            I want to create a new job
            <div className="flex gap-3 my-3">
              <div
                onClick={() => setProjectType("long term")}
                className={`border active:scale-95 hover:bg-[#F9F9F9] w-full   p-5 ${
                  projectType == "long term"
                    ? "border-black outline-2 "
                    : "border-gray-500"
                } rounded-md cursor-pointer transition-all duration-100 hover:outline-2`}
              >
                <div className="flex items-center justify-between">
                  <img src="/icons/JobsIcons/longTerms.svg" alt="" width={40} />

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        className="hidden "
                        checked={projectType == "long term"}
                        value={projectType}
                        onChange={(e) => setProjectType("long term")}
                        name="role"
                      />

                      <span
                        className={`w-6 h-6 rounded-full border-2  flex items-center justify-center ${
                          projectType == "long term"
                            ? "border-green-500 border-double"
                            : "border-gray-600"
                        } `}
                      >
                        <span
                          className={`w-3 h-3 rounded-full ${
                            projectType == "long term"
                              ? "bg-green-500"
                              : "bg-white"
                          } transition-colors`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>

                <h2 className="text-xl">Long term Project</h2>
                <p className="text-gray-600">
                  More than thirty hours a week and/or will be longer than 3
                  monts
                </p>
              </div>
              {/*  */}

              <div
                onClick={() => setProjectType("short term")}
                className={`border active:scale-95 hover:bg-[#F9F9F9] w-full   p-5 ${
                  projectType == "short term"
                    ? "border-black outline-2 "
                    : "border-gray-500"
                } rounded-md cursor-pointer transition-all duration-100 hover:outline-2`}
              >
                <div className="flex items-center justify-between">
                  <img src="/icons/JobsIcons/shortTerm.svg" alt="" width={40} />

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        className="hidden "
                        checked={projectType == "short term"}
                        value={projectType}
                        onChange={(e) => setProjectType("short term")}
                        name="role"
                      />

                      <span
                        className={`w-6 h-6 rounded-full border-2  flex items-center justify-center ${
                          projectType == "short term"
                            ? "border-green-500 border-double"
                            : "border-gray-600"
                        } `}
                      >
                        <span
                          className={`w-3 h-3 rounded-full ${
                            projectType == "short term"
                              ? "bg-green-500"
                              : "bg-white"
                          } transition-colors`}
                        ></span>
                      </span>
                    </label>
                  </div>
                </div>

                <h2 className="text-xl">Short term Project</h2>
                <p className="text-gray-600">
                  More than thirty hours a week and/or will be longer than 3
                  monts
                </p>
              </div>
            </div>
          </li>

          <li>
            I want to create a new job
            <div></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FirstJobSection;
