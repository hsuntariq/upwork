import { Button } from '@mui/material'
import React from 'react'

const JobFooter = ({ width }) => {
    return (
        <>

            <div className="w-full items-center   shadow-2xl  fixed bottom-0 z-10">
                <div className="h-[3px] w-full bg-gray-300">
                    <div className={`${width} h-full bg-black`} ></div>
                </div>
                <div className="flex p-7 justify-between">

                    <div className="flex gap-3">
                        <Button className='text-green' style={{ border: '1px solid lightgray' }} variant='outlined'>
                            Back
                        </Button>
                        <Button className='text-green' style={{ border: '0' }} variant='outlined'>
                            Post Job Using UI
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobFooter