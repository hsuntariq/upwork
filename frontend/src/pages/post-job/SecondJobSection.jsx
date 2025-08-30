import React, { useContext, useState } from "react";
import ClientNav from "../../components/client/ClientNav";
import { TextField } from "@mui/material";
import JobFooter from "../../components/client/JobFooter";
import { BsExclamationCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { JobContext } from "../../context/JobContext";

const SecondJobSection = () => {
  const { title, setTitle } = useContext(JobContext);

  const [errors, setErrors] = useState({
    required: false,
    minLength: false,
  });

  const handleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);

    if (!newTitle.trim()) {
      setErrors({ required: true, minLength: false });
    } else if (newTitle.trim().length < 3) {
      setErrors({ required: false, minLength: true });
    } else {
      setErrors({ required: false, minLength: false });
    }
  };

  const { required, minLength } = errors;

  const isDisabled = required || minLength || !title.trim();

  return (
    <>
      <ClientNav />

      <div className=" w-[90%]  mx-auto xl:w-[60%] lg:w-[75%] flex justify-center gap-10  py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full  mx-auto md:grid  md:grid-cols-2 gap-8 ">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <p className="text-gray-500 flex gap-4 text-sm mb-2">
              1/5 Job post
            </p>
            <h2 className="text-2xl font-semibold text-gray-800">
              Let's start with a strong title.
            </h2>
            <p className="text-gray-600 mt-4">
              This helps your job post stand out to the right candidates. It’s
              the first thing they’ll see, so make it count!
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1  p-6 rounded-lg shadow-lg"
          >
            <h4 className="font-semibold text-gray-800 mb-2">
              Write a title for your job post
            </h4>
            <TextField
              value={title}
              onChange={handleChange}
              placeholder="e.g. Create a React App"
              className="w-full "
              label="Title"
              variant="outlined"
              size="small"
            />
            {required && (
              <p className="text-red-500 font-semibold flex gap-2 items-center text-sm mt-2">
                <BsExclamationCircle /> Title is required
              </p>
            )}
            {minLength && (
              <p className="text-red-500 font-semibold flex gap-2 items-center text-sm mt-2">
                <BsExclamationCircle /> Minimum length should be 3 characters
              </p>
            )}

            <h4 className="text-md font-semibold text-gray-800 mt-6 mb-2">
              Example titles
            </h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Build responsive WordPress site with booking/payment
                functionality
              </li>
              <li>
                Graphic designer needed to design ad creative for multiple
                campaigns
              </li>
              <li>Facebook ad specialist needed for product launch</li>
              <li>Data analyst to build budget and forecasting dashboard</li>
              <li>Web developer to redesign and rebuild company website</li>
            </ul>
          </motion.div>
        </div>

        <JobFooter
          width="w-1/5"
          content={"Next: Skills"}
          disabled={isDisabled}
          link={"/third-job-section"}
        />
      </div>
    </>
  );
};

export default SecondJobSection;
