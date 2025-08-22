import React, { useEffect, useState } from 'react'
import ClientNav from '../../components/client/ClientNav'
import { TextField } from '@mui/material'
import JobFooter from '../../components/client/JobFooter'
import { BsExclamationCircle } from "react-icons/bs";
import { skills } from '../../data/skillsData';
import { FaStarAndCrescent } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import toast from 'react-hot-toast';

const ThirdJobSection = () => {
    const [skillInput, setSkillInput] = useState('')
    const [list, setList] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])
    const [errors, setErrors] = useState({
        required: false,
        minLenght: false,
    })



    useEffect(() => {
        let filterdData = skills.filter((item, index) => {
            return item.name.toLowerCase().includes(skillInput.toLowerCase())
        })
        setList(filterdData)
    }, [skillInput])

    const handleChange = (e) => {
        setSkillInput(e.target.value)
    }


    const handleSelectedSkills = (value) => {
        setSkillInput('')
        if (selectedSkills.length < 10) {
            if (selectedSkills.includes(value)) {
                return
            } else {
                setSelectedSkills([...selectedSkills, value])
            }
        } else {
            toast.error('Maximum of 10 skills allowed')
        }

    }


    const removeSkill = (id) => {
        let newSkills = selectedSkills.filter((item, index) => {
            return item.id !== id
        })

        setSelectedSkills(newSkills)

    }



    return (
        <>
            <ClientNav />
            <div className="w-[90%] py-5 gap-5 side_padding  xl:w-[70%] lg:w-[85%] mx-auto grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12">
                    <p className="text-gray-500 flex gap-4 text-sm">
                        2/5 Job post
                    </p>
                    <h2 className='text-5xl font-semibold'>What are the main skills required for your work?</h2>

                </div>
                <div className="lg:col-span-6 col-span-12 flex gap-3 flex-col">
                    <h4 className='font-semibold'>Search or add up to 10 skills
                    </h4>
                    <TextField value={skillInput} onChange={handleChange} placeholder='e.g Create a React App' className='w-full' label='Skills' />
                    {skillInput.length > 0 && (
                        <ul className="max-h-[400px] rounded-md h-max overflow-y-scroll p-2 shadow border border-gray-300">
                            {/* dynamic content to show relavent categories */}
                            {list.length > 0 ? (
                                <>
                                    {list?.map((item, index) => {
                                        return <li onClick={() => handleSelectedSkills(item)} key={index} className='p-2 font-semibold hover:bg-gray-200 cursor-pointer rounded-md'>
                                            {item?.name}
                                        </li>
                                    })}
                                </>
                            ) : (
                                <>
                                    <li onClick={() => handleSelectedSkills({ id: Date.now(), name: skillInput, category: skillInput })} className='p-2 font-semibold hover:bg-gray-200 cursor-pointer rounded-md'>
                                        {skillInput}
                                    </li>
                                </>
                            )}
                        </ul>)}
                    <h4 className="text-md flex gap-2 items-center text-gray-500 text">
                        <FaStarAndCrescent />  For the best results, add 3-5 skills                    </h4>

                    {selectedSkills.length > 0 && (
                        <>
                            <div className="selcted-skills">
                                <h4 className='text-xl font-normal text-gray-800'>Selected Skills</h4>
                            </div>

                            <ul className="flex flex-wrap text-sm unstyled gap-3 font-semibold">

                                {selectedSkills?.map((item, index) => {
                                    return <li key={index} className='flex hover:bg-gray-200 hover:border-green-600 items-center gap-3 border py-1 px-3 rounded-full border-2 bg-gray-100 border-gray-300'>
                                        {item.name}
                                        <IoClose className='cursor-pointer hover:scale-120' onClick={() => removeSkill(item.id)} />
                                    </li>
                                })}
                            </ul>

                        </>
                    )}
                </div>
            </div>
            <JobFooter width='w-2/5' content={'Next:Scope'} disabled={selectedSkills.length < 1} link={'/fourth-job-section'} />
        </>
    )
}

export default ThirdJobSection