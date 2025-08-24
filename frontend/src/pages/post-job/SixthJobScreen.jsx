import React, { useEffect, useState } from 'react'
import ClientNav from '../../components/client/ClientNav'
import { TextField } from '@mui/material'
import JobFooter from '../../components/client/JobFooter'
import { BsExclamationCircle } from "react-icons/bs";
import { skills } from '../../data/skillsData';
import { FaStarAndCrescent } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { CiStopwatch } from 'react-icons/ci';
import axios from 'axios';

const SixthJobScreen = () => {

    const [file, setFile] = useState(null)

    // cloud username = dwtsjgcyf
    // preset = ls8frk5v





    const [rate, setRate] = useState('hourly')


    return (
        <>
            <ClientNav />
            <div className="w-[90%] py-5 gap-5 side_padding  xl:w-[60%] lg:w-[75%] mx-auto grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12">
                    <p className="text-gray-500 flex gap-4 text-sm">
                        4/5 Job post
                    </p>
                    <h2 className='text-3xl font-semibold'>Tell us about your budget.</h2>
                    <p className="text-gray-500 mt-5">
                        This will help us match you to talent within your range.
                    </p>
                </div>
                <div className="lg:col-span-6 col-span-12 flex gap-3 flex-col">






                    <div className="flex gap-4">
                        <label onClick={() => setRate('hourly')} htmlFor="hourly" className='border cursor-pointer border-2 border-gray-300 w-full p-10 rounded-md'>
                            <div className="flex  justify-between">
                                <div className="flex flex-col">
                                    <CiStopwatch />
                                    <h2>Hourly Rate</h2>
                                </div>
                                <input value={rate} onChange={() => setRate('hourly')} type="radio" name="rate" id='hourly' className='w-[28px] h-[28px]' />
                            </div>
                        </label>
                        <label onClick={() => setRate('fixed')} htmlFor="fixed" className='border cursor-pointer border-2 border-gray-300 w-full p-10 rounded-md'>
                            <div className="flex  justify-between">
                                <div className="flex flex-col">
                                    <CiStopwatch />
                                    <h2>Fixed Rate</h2>
                                </div>
                                <input value={rate} onChange={() => setRate('fixed')} type="radio" name="rate" id='fixed' className='w-[28px] h-[28px]' />
                            </div>
                        </label>
                    </div>


                    {rate == 'hourly' ? (<div className="hourly">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <p className="text-gray-600">
                                    From
                                </p>
                                <div className="flex items-center gap-2 w-[60%]">
                                    <input type="text" className="border w-full outline-0 border-gray-300 rounded-md px-3 py-2" value='$200.00' />
                                    /hr
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-600">
                                    To
                                </p>
                                <div className="flex items-center gap-2 w-[60%]">
                                    <input type="text" className="border w-full outline-0 border-gray-300 rounded-md px-3 py-2" value='$250.00' />
                                    /hr
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Professionals tend to charge <b className='text-black'>$10 - $25</b> /hour (USD) for graphic design projects like yours. Experts may charge higher rates.
                        </p>

                    </div>)
                        : (<div className="flex flex-col gap-4">
                            <p className="text-gray-600">
                                Set a price for the project and pay at the end, or you can divide the project into milestones and pay as each milestone is completed.
                            </p>

                            <h4 className='font-semibold'>
                                What is the best cost estimate for your project?
                            </h4>
                            <p className="textgray-600">
                                You can negotiate this cost and create milestones when you chat with your freelancer.
                            </p>
                            <input type="text" className="border w-1/3 outline-0 border-gray-300 rounded-md px-3 py-2" value='0' />
                        </div>)}





                    <input type="file" onChange={handleChange} />



                </div>
            </div >
            <JobFooter width='w-4/5' content={'Next:Scope'} link={'/fourth-job-section'} />
        </>
    )
}

export default SixthJobScreen