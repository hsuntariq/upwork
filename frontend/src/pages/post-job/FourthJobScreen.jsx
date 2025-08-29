import React, { useContext, useEffect, useState } from "react";
import ClientNav from "../../components/client/ClientNav";
import JobFooter from "../../components/client/JobFooter";
import { FaPencilAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { experience, type } from "../../data/fourth_data";
import { JobContext } from "../../context/JobContext";

const FourthJobSection = () => {
  const { projectInfo, setProjectInfo } = useContext(JobContext);

  const [durationSelected, setDurationSelected] = useState(false);
  const [duration, setDuration] = useState("");
  const [showDuration, setShowDuration] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(experience);
  const [selectedType, setSelectedType] = useState(type);
  const [Type, setType] = useState("");
  const [Experience, setExperience] = useState("");
  const time = ["More than 6 months", "3 to 6 months", "1 to 3 months"];

  const handleSelectedType = (id) => {
    setShowDuration(true);
    let newSelectedType = selectedType.filter((item) => item.id === id);
    setSelectedType(newSelectedType);
    setType(newSelectedType[0].name);
  };

  const handleExperience = (id) => {
    let newExperience = selectedExperience.filter((item) => item.id === id);
    setSelectedExperience(newExperience);
    setExperience(newExperience[0].name);
  };

  useEffect(() => {
    setProjectInfo({
      projectType: Type,
      projectDuration: duration,
      experience: Experience,
    });
  }, [Type, duration, Experience, setProjectInfo]);
console.log(projectInfo);


  return (
    <>
      <ClientNav />
      <div className="w-[90%] py-6 gap-6 xl:w-[60%] lg:w-[75%] mx-auto grid grid-cols-12">
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
              {showDuration && selectedType.length !== 3 && (
                <button
                  onClick={() => setSelectedType(type)}
                  className="p-2 rounded-full border border-gray-300 text-green-600 hover:bg-gray-50 transition"
                >
                  <FaPencilAlt size={15} />
                </button>
              )}
            </div>

            <div className="space-y-3">
              {selectedType.map((item) => (
                <label
                  key={item.id}
                  onClick={() => handleSelectedType(item.id)}
                  htmlFor={item.name}
                  className="flex gap-4 items-start cursor-pointer p-3 border rounded-lg hover:shadow-md transition"
                >
                  {selectedType.length !== 1 && (
                    <input
                      type="radio"
                      name="type"
                      id={item.name}
                      className="h-5 w-5 mt-1"
                    />
                  )}
                  <div>
                    <h5 className="font-semibold">{item.name}</h5>
                    {selectedType.length !== 1 && (
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    )}
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
                {durationSelected && (
                  <button
                    onClick={() => {
                      setDurationSelected(false);
                      setDuration("");
                    }}
                    className="p-2 rounded-full border border-gray-300 text-green-600 hover:bg-gray-50 transition"
                  >
                    <FaPencilAlt size={15} />
                  </button>
                )}
              </div>

              {!durationSelected ? (
                <div className="space-y-3">
                  {time.map((item, index) => (
                    <label
                      key={index}
                      onClick={() => {
                        setDurationSelected(true);
                        setDuration(item);
                      }}
                      htmlFor={item}
                      className="flex gap-4 items-start cursor-pointer p-3 border rounded-lg hover:shadow-md transition"
                    >
                      <input
                        type="radio"
                        name="duration"
                        id={item}
                        className="h-5 w-5 mt-1"
                      />
                      <div>
                        <h5 className="font-semibold">{item}</h5>
                        <p className="text-sm text-gray-500">
                          {/* optional extra description if you want */}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold w-full border p-2 rounded-lg py-3">
                    {duration}
                  </h5>
                </div>
              )}
            </div>
          )}

          {/* Experience Section */}
          {duration && (
            <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">Experience Level</h4>
                {selectedExperience.length === 1 && (
                  <button
                    onClick={() => {setSelectedExperience(experience), setExperience("") }}
                    className="p-2 rounded-full border border-gray-300 text-green-600 hover:bg-gray-50 transition"
                  >
                    <FaPencilAlt size={15} />
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {selectedExperience.map((item) => (
                  <label
                    key={item.id}
                    onClick={() => handleExperience(item.id)}
                    htmlFor={item.name}
                    className="flex gap-4 items-start cursor-pointer p-3 border rounded-lg hover:shadow-md transition"
                  >
                    {selectedExperience.length !== 1 && (
                      <input
                        type="radio"
                        name="experience"
                        id={item.name}
                        className="h-5 w-5 mt-1"
                      />
                    )}
                    <div>
                      <h5 className="font-semibold">{item.name}</h5>
                      {selectedExperience.length !== 1 && (
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      )}
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
        disabled={
           projectInfo.experience  == "" ||      projectInfo.duration == "" || projectInfo.type == ""
        }
      />
    </>
  );
};

export default FourthJobSection;
