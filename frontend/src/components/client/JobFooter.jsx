import { Button } from '@mui/material'
import React from 'react'
import { Link, Router, useNavigate } from 'react-router-dom'

const JobFooter = ({ width, content, disabled, link }) => {
    const navigate = useNavigate()
    return (
        <>

            <div className="w-full items-center   shadow-2xl  fixed bottom-0 z-10">
                <div className="h-[3px] w-full bg-gray-300">
                    <div className={`${width} h-full bg-black`} ></div>
                </div>
                <div className="flex p-7 justify-between">

                    <div className="flex gap-3">
                        <Button onClick={() => navigate(-1)} className='text-green' style={{ border: '1px solid lightgray' }} variant='outlined'>
                            Back
                        </Button>
                        <Button className='text-green' style={{ border: '0' }} variant='outlined'>
                            Post Job Using UI
                        </Button>
                    </div>

                    <Button onClick={() => navigate(link)} disabled={disabled} className='' style={{ border: '1px solid lightgray', background: disabled ? 'gray' : '#00a63e', color: 'white' }} variant='outlined'>
                        {content}
                    </Button>

                </div>
            </div>
        </>
    )
}

export default JobFooter