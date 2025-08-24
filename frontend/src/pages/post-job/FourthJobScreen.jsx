import React, { useEffect, useState } from 'react'
import ClientNav from '../../components/client/ClientNav'
import { TextField } from '@mui/material'
import JobFooter from '../../components/client/JobFooter'
import { BsExclamationCircle } from "react-icons/bs";
import { skills } from '../../data/skillsData';
import { FaPencilAlt, FaStarAndCrescent } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { experience, type } from '../../data/fourth_data';

const FourthJobSection = () => {
    const [skillInput, setSkillInput] = useState('')
    const [list, setList] = useState([])
    const [selectedSkills, setSelectedSkills] = useState([])
    const [durationSelected, setDurationSelected] = useState(false)
    const [duration, setDuration] = useState('')
    const [experienceId, setExperienceID] = useState(null)
    const [errors, setErrors] = useState({
        required: false,
        minLenght: false,
    })
    const [showDuration, setShowDuration] = useState(false)



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



    const [selectedExperience, setSelectedExperience] = useState(experience)

    const [selectedType, setSelectedType] = useState(type)


    const handleSelectedType = (id) => {
        setShowDuration(true)
        let newSelectedType = selectedType.filter((item, index) => {
            return item.id == id
        })
        setSelectedType(newSelectedType)
    }




    const time = [
        'More than 6 months', '3 to 6 months', '1 to 3 months'
    ]


    const handleExperience = (id) => {
        let newExperience = selectedExperience.filter((item, index) => {
            return item.id == id
        })

        setSelectedExperience(newExperience)
    }




    return (
        <>
            <ClientNav />
            <div className="w-[90%] py-5 gap-5 side_padding  xl:w-[60%] lg:w-[75%] mx-auto grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12">
                    <p className="text-gray-500 flex gap-4 text-sm">
                        3/5 Job post
                    </p>
                    <h2 className='text-3xl font-semibold'>Next, estimate the scope of your work.</h2>
                    <p className="text-gray-500 text-sm">
                        These aren’t final answers, but this information helps us recommend the right talent for what you need.
                    </p>
                </div>
                <div className="lg:col-span-6 col-span-12 flex gap-3 flex-col">
                    <div className="flex  justify-between">
                        <div className="">

                            {selectedType.map((item, index) => {
                                return <div className='flex  justify-between' onClick={() => handleSelectedType(item.id)}>

                                    <label htmlFor={item.name} className="flex  gap-4" >
                                        {selectedType.length != 1 && <input type="radio" className='h-[28px] w-[28px] w-[20%]' name="type" id={item.name} />}
                                        <div className="flex flex-col w-[80%] gap-2">
                                            <h5 className='font-semibold'>{item.name}</h5>
                                            {selectedType.length != 1 && <p className="text-gray-500">
                                                {item.desc}
                                            </p>}

                                        </div>
                                    </label>

                                </div>
                            })}
                        </div>

                        {showDuration && selectedType.length != 3 && <div onClick={() => {
                            setSelectedType(type)
                        }} className="cursor-pointer flex justify-center items-center   border border-gray-400 rounded-full text-green-600 p-2 h-fit ">
                            <FaPencilAlt size={15} />
                        </div>}
                    </div>

                    {showDuration && (
                        <>
                            {!durationSelected ? (
                                <>
                                    <h4 className='my-2'>How long will your work take?</h4>
                                    {time.map((item, index) => {
                                        return <label
                                            key={index}
                                            onClick={() => {
                                                setDurationSelected(true)
                                                setDuration(item)
                                            }}
                                            htmlFor={item}
                                            className="flex  gap-4">
                                            <input
                                                value={item}
                                                onChange={(e) => setDuration(item)}
                                                type="radio"
                                                className='h-7 w-7' name="duration" id={item} />
                                            <div className="flex flex-col  gap-2">
                                                <h5 className='font-semibold'>{item}</h5>

                                            </div>
                                        </label>
                                    })}
                                </>
                            )
                                :
                                (
                                    <>
                                        <div className="">

                                            <div className="flex justify-between items-center ">
                                                <h5 className='font-semibold'>{duration}</h5>
                                                <div onClick={() => {
                                                    setDurationSelected(false)
                                                }}

                                                    className="cursor-pointer flex justify-center items-center   border border-gray-400 rounded-full text-green-600 p-2 h-fit ">
                                                    <FaPencilAlt size={15} />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )

                            }
                        </>
                    )}

                    <div className="flex justify-between">
                        <div className="">

                            {duration && selectedExperience.map((item, index) => {
                                return <div onClick={() => handleExperience(item.id)} className='flex  justify-between'>

                                    <label htmlFor={item.name} className="flex  gap-4" >
                                        {selectedExperience.length != 1 && <input type="radio" className='h-[28px] w-[28px] w-[20%]' name="experience" id={item.name} />}
                                        <div className="flex flex-col w-[80%] gap-2">
                                            <h5 className='font-semibold'>{item.name}</h5>
                                            {selectedExperience.length != 1 && <p className="text-gray-500">
                                                {item.desc}
                                            </p>}

                                        </div>
                                    </label>

                                </div>
                            })}
                        </div>



                        {selectedExperience.length == 1 && <div onClick={() => {
                            setSelectedExperience(experience)
                        }} className="cursor-pointer flex justify-center items-center   border border-gray-400 rounded-full text-green-600 p-2 h-fit ">
                            <FaPencilAlt size={15} />
                        </div>}

                    </div>


                </div>
            </div>
            <JobFooter width='w-3/5' content={'Next:Budget'} link={'/fifth-job-section'} />
        </>
    )
}

export default FourthJobSection