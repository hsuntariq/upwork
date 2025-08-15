import React, { useContext, useState } from 'react'
import MainNav from '../../components/MainNav'
import { JobContext } from '../../context/JobContext'
import { FaCalendar } from 'react-icons/fa'

const FirstJobSection = () => {

    const [checked, setChecked] = useState('')
    const [projectType, setProjectType] = useState('')
    return (
        <>
            <MainNav />
            <div className="flex flex-col w-[90%] gap-5 side_padding justify-center  container xl:w-[70%] lg:w-[85%] md:flex-row mx-auto md:justify-between ">
                <h1 className="text-2xl w-full md:w-[30%]">How can we help you get started?</h1>
                <ul className="flex unstyled w-full flex-col md:w-[70%]">
                    <li>
                        I want to create a new job
                        <div className="flex gap-3 my-3">

                            <label onClick={() => setChecked('long-term')} htmlFor='type' className={`${checked == 'long-term' ? 'border-black outline-1' : 'border-gray-300'} rounded-md active:scale-95 transition-all duration cursor-pointer hover:outline-1 hover:border-black py-6 flex border-2  gap-3 p-4`}>
                                <div className="  ">
                                    <div className="flex rounded-md">
                                        <div className="">
                                            <FaCalendar />
                                            <h2 className="text-xl">Long term Project</h2>
                                            <p className="text-gray-600">
                                                More than thirty hours a week and/or will be longer than 3 monts
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <input value='long-term' onChange={(e) => setProjectType(e.target.value)} type="radio" name="type" className='h-[30px] text-green-500 w-[30px]' id="type" />
                            </label>
                            <label onClick={() => setChecked('short-term')} htmlFor='type2' className={`${checked == 'short-term' ? 'border-black outline-1' : 'border-gray-300'} rounded-md active:scale-95 transition-all duration cursor-pointer hover:outline-1 hover:border-black py-6 flex border-2  gap-3 p-4`}>
                                <div className="  ">
                                    <div className="flex rounded-md">
                                        <div className="">
                                            <FaCalendar />
                                            <h2 className="text-xl">Long term Project</h2>
                                            <p className="text-gray-600">
                                                More than thirty hours a week and/or will be longer than 3 monts
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <input value='short-term' onChange={(e) => setProjectType(e.target.value)} type="radio" name="type" className='h-[30px] text-green-500 w-[30px]' id="type2" />
                            </label>
                        </div>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default FirstJobSection