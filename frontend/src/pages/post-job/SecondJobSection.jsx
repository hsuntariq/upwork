import React, { useEffect, useState } from 'react'
import ClientNav from '../../components/client/ClientNav'
import { TextField } from '@mui/material'
import JobFooter from '../../components/client/JobFooter'
import { BsExclamationCircle } from "react-icons/bs";

const SecondJobSection = () => {
    const [title, setTitle] = useState('')
    const [errors, setErrors] = useState({
        required: false,
        minLenght: false,
    })


    const { required, minLenght } = errors

    // useEffect(() => {

    // }, [title])

    const handleChange = (e) => {
        setTitle(e.target.value)
        if (!title) {
            setErrors({ required: true, minLenght: false })
        } if (title.length < 3) {
            setErrors({ required: false, minLenght: true })
        } if (title && minLenght.length > 3) {
            setErrors({ minLenght: false, required: false })
        }
    }

    return (
        <>
            <ClientNav />
            <div className="w-[90%] py-5 gap-5 side_padding  xl:w-[70%] lg:w-[85%] mx-auto grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12">
                    <p className="text-gray-500 flex gap-4 text-sm">
                        1/5 Job post
                    </p>
                    <h2 className='text-xl font-semibold'>Let's start with a strong title.</h2>
                    <p className="text-gray-800 my-4">
                        This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!
                    </p>
                </div>
                <div className="lg:col-span-6 col-span-12 flex gap-3 flex-col">
                    <h4 className='font-semibold'>Write a title for your job post</h4>
                    <TextField value={title} onChange={handleChange} placeholder='e.g Create a React App' className='w-full' label='Title' />
                    {required && <p className='text-red-500 font-semibold flex gap-2 items-center text-sm'><BsExclamationCircle />  Title is required</p>}
                    {minLenght && <p className='text-red-500 font-semibold flex gap-2 items-center text-sm'><BsExclamationCircle /> minimum length should be 3 </p>}
                    <h4 className="text-md font-semibold">
                        Example titles
                    </h4>
                    <ul className='list-disc ms-5'>
                        <li>Build responsive WordPress site with booking/payment functionality</li>
                        <li>Graphic designer needed to design ad creative for multiple campaigns

                        </li>
                        <li>Facebook ad specialist needed for product launch
                        </li>
                    </ul>
                </div>
            </div>
            <JobFooter width='w-1/5' content={'Next:Skills'} disabled={!title} link={'/third-job-section'} />
        </>
    )
}

export default SecondJobSection