import React, { useContext, useState } from "react";
import { JobContext } from "../../context/JobContext";
import { FaCalendar } from "react-icons/fa";
import ClientNav from "../../components/client/ClientNav";
import { Button, MenuItem, TextField } from '@mui/material'
import { useNavigate } from "react-router-dom";
const FirstJobSection = () => {
    const [projectType, setProjectType] = useState("");
    const [open, setOpen] = useState(null)

    const handleOpen = (id) => {
        setOpen(open == id ? null : id)
    }

    const navigate = useNavigate()



    return (
        <>
            <ClientNav />

            <div className="flex select-none flex-col w-[90%] gap-5 side_padding justify-center xl:w-[70%] lg:w-[85%] md:flex-row mx-auto md:justify-between ">
                <h1 className="text-2xl w-full md:w-[30%]">
                    How can we help you get started?
                </h1>
                <ul className="flex unstyled gap-4 w-full flex-col md:w-[70%]">
                    <li onClick={() => handleOpen(1)} className="text-xl cursor-pointer overflow-hidden">
                        I want to create a new job
                        <div className={`flex  gap-3  transition-all duration-300 text-sm ${open == 1 ? 'visible h-[150px] my-3' : 'h-0 invisible '} `}>
                            <div
                                onClick={(e) => {
                                    setProjectType("long term")
                                    e.stopPropagation()
                                }}
                                className={`border active:scale-95 hover:bg-[#F9F9F9] w-full   p-5 ${projectType == "long term"
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
                                                className={`w-6 h-6 rounded-full border-2  flex items-center justify-center ${projectType == "long term"
                                                    ? "border-green-500 border-double"
                                                    : "border-gray-600"
                                                    } `}
                                            >
                                                <span
                                                    className={`w-3 h-3 rounded-full ${projectType == "long term"
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
                                onClick={(e) => {
                                    setProjectType("short term")
                                    e.stopPropagation()
                                }}
                                className={`border active:scale-95 hover:bg-[#F9F9F9] w-full   p-5 ${projectType == "short term"
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
                                                className={`w-6 h-6 rounded-full border-2  flex items-center justify-center ${projectType == "short term"
                                                    ? "border-green-500 border-double"
                                                    : "border-gray-600"
                                                    } `}
                                            >
                                                <span
                                                    className={`w-3 h-3 rounded-full ${projectType == "short term"
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

                    <li onClick={() => handleOpen(2)} className="text-xl cursor-pointer">
                        I want to continue editing a draft
                        <div onClick={(e) => e.stopPropagation()} className={`w-full  transition-all duration-300 ${open == 2 ? 'visible h-[50px]' : 'h-0 invisible'} `}>

                            <TextField select fullWidth>
                                <MenuItem>
                                    Testing
                                </MenuItem>
                            </TextField>
                        </div>
                    </li>
                    <li onClick={(e) => {
                        handleOpen(3)
                        e.stopPropagation()
                    }} className="text-xl cursor-pointer">
                        I want to rework on a previous job post
                        <div className={`w-full transition-all duration-300  ${open == 3 ? 'visible h-[50px]' : 'h-0 invisible'} `}>

                            <TextField select fullWidth>
                                <MenuItem>
                                    Testing
                                </MenuItem>
                            </TextField>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex gap-3 items-center w-[90%] mx-auto xl:w-[70%] lg:w-[85%] justify-end">
                <Button style={{ color: 'oklch(62.7% 0.194 149.214)' }}>Cancel</Button>
                <Button onClick={() => navigate('/second-job-section')} disabled={!projectType} style={{ background: projectType ? 'oklch(62.7% 0.194 149.214)' : '#ccc' }} variant="contained">Continue</Button>
            </div>
        </>
    );
};

export default FirstJobSection;
