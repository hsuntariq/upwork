import React, { useContext, useEffect, useState } from "react";
import ClientNav from "../../components/client/ClientNav";
import JobFooter from "../../components/client/JobFooter";
import { FaPencilAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { skills } from "../../data/skillsData";
import { experience, type } from "../../data/fourth_data";
import { JobContext } from "../../context/JobContext";

const FourthJobSection = () => {


  const {
    selectedTypeId,
    setSelectedExperienceId,
    setSelectedTypeId,
    duration,
    setDuration,
    showDuration,
    setShowDuration,
    selectedExperienceId,
    time,
    handleSelectedType,
    handleDuration,
    handleExperience } = useContext(JobContext)

  return (
    <>
      <ClientNav />
      <div className="w-[90%] py-6 gap-6 xl:w-[60%] lg:w-[75%] mx-auto grid grid-cols-12 my-9 pb-20">
        {/* Left Side Text */}
        <div className="lg:col-span-6 col-span-12 space-y-3">
          <p className="text-gray-500 text-sm">3/5 Job post</p>
          <h2 className="text-3xl font-semibold">
            Next, estimate the scope of your work.
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            These aren’t final answers, but this info helps us recommend the
            right talent for what you need.
          </p>
        </div>

        {/* Right Side Content */}
        <div className="lg:col-span-6 col-span-12 flex gap-6 flex-col">
          {/* Type Section */}
          <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Project Type</h4>
              {selectedTypeId && (
                <button
                  onClick={() => {
                    setSelectedTypeId(null);
                    setShowDuration(false);
                    setDuration("");
                    setSelectedExperienceId(null);
                  }}
                  className="p-2 rounded-full border border-gray-300 text-green-600 hover:bg-gray-50 transition cursor-pointer"
                >
                  <FaPencilAlt size={15} />
                </button>
              )}
            </div>

            <div className="space-y-3">
              {type.map((item) => (
                <label
                  key={item.id}
                  htmlFor={item.name}
                  className="flex gap-4 items-start cursor-pointer p-3 border rounded-lg hover:shadow-md transition"
                >
                  <input
                    type="radio"
                    name="type"
                    id={item.name}
                    value={item.id}
                    checked={selectedTypeId === item.id}
                    onChange={() => handleSelectedType(item.id)}
                    className="h-5 w-5 mt-1"
                  />
                  <div>
                    <h5 className="font-semibold">{item.name}</h5>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Section */}
          {showDuration && (
            <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">How long will your work take?</h4>
                {duration && (
                  <button
                    onClick={() => {
                      setDuration("");
                      setSelectedExperienceId(null);
                    }}
                    className="p-2 rounded-full border border-gray-300 text-green-600 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <FaPencilAlt size={15} />
                  </button>
                )}
              </div>

              <div className="space-y-3">
                {time.map((item, index) => (
                  <label
                    key={index}
                    htmlFor={item}
                    className="flex gap-4 items-start cursor-pointer p-3 border rounded-lg hover:shadow-md transition"
                  >
                    <input
                      type="radio"
                      name="duration"
                      id={item}
                      value={item}
                      checked={duration === item}
                      onChange={() => handleDuration(item)}
                      className="h-5 w-5 mt-1"
                    />
                    <div>
                      <h5 className="font-semibold">{item}</h5>
                      <p className="text-sm text-gray-500">
                        {/* Optional extra description if you want */}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section */}
          {duration && (
            <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Experience Level</h4>
                {selectedExperienceId && (
                  <button
                    onClick={() => setSelectedExperienceId(null)}
                    className="p-2 rounded-full border border-gray-300 text-green-600 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <FaPencilAlt size={15} />
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {experience.map((item) => (
                  <label
                    key={item.id}
                    htmlFor={item.name}
                    className="flex gap-4 items-start cursor-pointer p-3 border rounded-lg hover:shadow-md transition"
                  >
                    <input
                      type="radio"
                      name="experience"
                      id={item.name}
                      value={item.id}
                      checked={selectedExperienceId === item.id}
                      onChange={() => handleExperience(item.id)}
                      className="h-5 w-5 mt-1"
                    />
                    <div>
                      <h5 className="font-semibold">{item.name}</h5>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <JobFooter
        width="w-3/5"
        content="Next: Budget"
        link="/fifth-job-section"
      />
    </>
  );
};

export default FourthJobSection;