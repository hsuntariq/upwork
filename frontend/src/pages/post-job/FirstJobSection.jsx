import React, { useState, useEffect, useContext } from "react";
import { FaCalendar, FaCheckCircle } from "react-icons/fa";
import ClientNav from "../../components/client/ClientNav";
import { Button, MenuItem, TextField, InputAdornment } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { JobContext } from "../../context/JobContext";

const FirstJobSection = () => {

  const { projectType, setProjectType } = useContext(JobContext)


  const [open, setOpen] = useState(null);
  const [draftSearch, setDraftSearch] = useState("");
  const [jobSearch, setJobSearch] = useState("");
  const navigate = useNavigate();

  const handleOpen = (id) => {
    setOpen(open === id ? null : id);
  };

  const handleProjectType = (type) => {
    setProjectType(type);
    toast.success(`Selected ${type} project!`, {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#10B981",
        color: "#fff",
        fontWeight: "500",
      },
    });
  };

  const drafts = ["Draft #1", "Draft #2", "Draft #3"];
  const jobs = ["Job Post A", "Job Post B", "Job Post C"];

  const filteredDrafts = drafts.filter((draft) =>
    draft.toLowerCase().includes(draftSearch.toLowerCase())
  );
  const filteredJobs = jobs.filter((job) =>
    job.toLowerCase().includes(jobSearch.toLowerCase())
  );

  return (
    <>
      <ClientNav />
      <div className=" w-[90%]  mx-auto xl:w-[60%] lg:w-[75%] flex justify-center gap-10 py-12 px-4 sm:px-6 lg:px-8">
        <Toaster />

        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center"
        >
          How can we help you get started?
        </motion.h1>

        {/* Main Content */}
        <div className="w-full  max-w-5xl  md:flex-row gap-8">
          {/* Options List */}
          <ul className="w-full space-y-6">
            {/* Create New Job */}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => handleOpen(1)}
              className="text-lg sm:text-xl cursor-pointer border-b-2 border-gray-200 pb-4 transition-colors hover:text-green-600 hover:border-green-500"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOpen(1)}
            >
              I want to create a new job
              <AnimatePresence>
                {open === 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 space-y-4"
                  >
                    {/* Long Term */}
                    <div
                      onClick={(e) => {
                        handleProjectType("long term");
                        e.stopPropagation();
                      }}
                      className={`p-6 rounded-2xl border-2 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${projectType === "long term"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 bg-white"
                        }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleProjectType("long term")
                      }
                    >
                      <div className="flex items-center justify-between">
                        <img
                          src="/icons/JobsIcons/longTerms.svg"
                          alt="Long Term Project"
                          className="w-12 h-12"
                        />
                        <FaCheckCircle
                          className={`text-2xl ${projectType === "long term"
                            ? "text-green-500"
                            : "text-gray-400"
                            }`}
                        />
                      </div>
                      <h2 className="text-xl font-semibold mt-3 text-gray-800">
                        Long Term Project
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">
                        More than thirty hours a week and/or longer than 3
                        months.
                      </p>
                    </div>

                    {/* Short Term */}
                    <div
                      onClick={(e) => {
                        handleProjectType("short term");
                        e.stopPropagation();
                      }}
                      className={`p-6 rounded-2xl border-2 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${projectType === "short term"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300 bg-white"
                        }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleProjectType("short term")
                      }
                    >
                      <div className="flex items-center justify-between">
                        <img
                          src="/icons/JobsIcons/shortTerm.svg"
                          alt="Short Term Project"
                          className="w-12 h-12"
                        />
                        <FaCheckCircle
                          className={`text-2xl ${projectType === "short term"
                            ? "text-green-500"
                            : "text-gray-400"
                            }`}
                        />
                      </div>
                      <h2 className="text-xl font-semibold mt-3 text-gray-800">
                        Short Term Project
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">
                        Quick assignments or less than 3 months of work.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            {/* Continue Editing Draft */}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => handleOpen(2)}
              className="text-lg sm:text-xl cursor-pointer border-b-2 border-gray-200 pb-4 transition-colors hover:text-green-600 hover:border-green-500"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOpen(2)}
            >
              I want to continue editing a draft
              <AnimatePresence>
                {open === 2 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label="Search drafts"
                      value={draftSearch}
                      onChange={(e) => setDraftSearch(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaCalendar className="text-gray-500" />
                          </InputAdornment>
                        ),
                      }}
                      className="bg-white rounded-lg"
                    >
                      {filteredDrafts.length > 0 ? (
                        filteredDrafts.map((draft) => (
                          <MenuItem key={draft} value={draft}>
                            {draft}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No drafts found</MenuItem>
                      )}
                    </TextField>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>

            {/* Rework Previous Post */}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => handleOpen(3)}
              className="text-lg sm:text-xl cursor-pointer border-b-2 border-gray-200 pb-4 transition-colors hover:text-green-600 hover:border-green-500"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOpen(3)}
            >
              I want to rework on a previous job post
              <AnimatePresence>
                {open === 3 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label="Search previous jobs"
                      value={jobSearch}
                      onChange={(e) => setJobSearch(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaCalendar className="text-gray-500" />
                          </InputAdornment>
                        ),
                      }}
                      className="bg-white rounded-lg"
                    >
                      {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                          <MenuItem key={job} value={job}>
                            {job}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No jobs found</MenuItem>
                      )}
                    </TextField>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          </ul>
          {/* Action Buttons */}
          <div className=" max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 justify-end py-8">
            <Button
              onClick={() => navigate("/")}
              variant="outlined"
              className="w-full sm:w-40 !border-red-500 !text-red-500 hover:!bg-red-50"
            >
              Cancel
            </Button>
            <Button
              onClick={() => navigate("/second-job-section")}
              disabled={!projectType}
              variant="contained"
              className={`w-full sm:w-40 ${projectType
                ? "!bg-green-600 hover:!bg-green-700"
                : "!bg-gray-400"
                } !text-white`}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstJobSection;
