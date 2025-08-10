import React, { useEffect, useState } from 'react'
import { TbUserCheck } from "react-icons/tb";
import Radio from '@mui/material/Radio';
import SecondSignUpScreen from './SecondSignUpScreen';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FirstSignUpScreen = () => {
    const [role, setRole] = useState('')
    let [secondScreen, setSecondScreen] = useState(false)
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (user) {
            navigate('/work')
        }
    }, [])

    return (
        <>
            {/* navbar */}

            {secondScreen ? <SecondSignUpScreen role={role} /> : (
                <>
                    <div className="flex py-5 px-10">
                        <img src="/svgs/logo.svg" width={100} height={100} alt="" />
                    </div>
                    <div className="flex gap-5  justify-center items-center flex-col mx-auto  w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[35%]">

                        <h1 className='text-4xl'>Join as a client or freelancer</h1>

                        <div className="flex gap-5 ">
                            <button onClick={() => setRole('client')} className={`border active:scale-95 hover:bg-[#F9F9F9]   border-gray-500 p-5 ${role == 'client' && 'bg-gray-100'} rounded-md`}>

                                <div className="flex justify-between items-center">
                                    <TbUserCheck size={30} />
                                    <Radio
                                        checked={role == 'client'}
                                        value={role}
                                        onChange={(e) => setRole('client')}
                                        name='role'
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 28,
                                            },
                                        }}
                                    />
                                </div>
                                <h3 className="text-2xl text-start font-semibold">
                                    I'm a client, hiring for a project</h3>
                            </button>
                            <div onClick={() => setRole('freelancer')} className={`border active:scale-95 hover:bg-[#F9F9F9]   border-gray-500 p-5 ${role == 'freelancer' && 'bg-gray-100'} rounded-md`}>
                                <div className="flex justify-between items-center">
                                    <TbUserCheck size={30} />
                                    <Radio
                                        checked={role == 'freelancer'}
                                        value={role}
                                        onChange={(e) => setRole('freelancer')}
                                        name='role'
                                        sx={{
                                            '& .MuiSvgIcon-root': {
                                                fontSize: 28,
                                            },
                                        }}
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold">
                                    I'm a client, hiring for a project</h3>
                            </div>
                        </div>
                        <button onClick={() => setSecondScreen(true)} disabled={!role} className={`${role ? 'bg-green-600 text-white cursor-pointer' : 'bg-gray-300 text-black cursor-not-allowed'} px-5 font-semibold py-3 rounded-md `}>
                            {role == '' ? 'Create Account' : role == 'client' ? 'Join as a client' : 'Apply as a freelancer'}
                        </button>
                    </div>
                </>
            )}




        </>
    )
}

export default FirstSignUpScreen