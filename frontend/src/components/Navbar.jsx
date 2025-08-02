import React, { useState } from 'react'
import { VscListSelection } from "react-icons/vsc";
import Sidebar from './Sidebar';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <Sidebar show={show} setShow={setShow} />
            <nav className="flex relative z-100  items-center p-5 justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex gap-1 flex-col cursor-pointer" onClick={() => setShow(!show)}>
                        <div className={`line w-[20px] h-[2px] bg-black transition-transform duration-300 ${show ? 'rotate-45 translate-y-[6px]' : ''}`}></div>
                        <div className={`line w-[20px] h-[2px] bg-black transition-opacity duration-300 ${show ? 'opacity-0' : ''}`}></div>
                        <div className={`line w-[20px] h-[2px] bg-black transition-transform duration-300 ${show ? '-rotate-45 -translate-y-[6px]' : ''}`}></div>
                    </div>
                    {/* <VscListSelection onClick={() => setShow(true)} size={30} cursor={'pointer'} className='block lg:hidden' /> */}
                    <img width={100} src="/svgs/logo.svg" alt="" />
                    <ul className="hidden lg:flex items-center unstyled text-sm font-semibold gap-4">
                        <li className='cursor-pointer'>Find Talent</li>
                        <li className='cursor-pointer'>Find Work</li>
                        <li className='cursor-pointer'>Why Upwork</li>
                        <li className='cursor-pointer'>What's new</li>
                        <li className='cursor-pointer'>Enterprise</li>
                        <li className='cursor-pointer'>Pricing</li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <button className="bg-transparent hidden lg:block">
                        Log in
                    </button>
                    {show ? <CiSearch size={25} cursor={'pointer'} /> :
                        <Link to={'/sign-up'}>
                            <button className="lg:bg-green-700 cursor-pointer bg-transparent lg:text-white text-black rounded-xl px-4 py-2">

                                Sign Up
                            </button>
                        </Link>
                    }

                </div>
            </nav>
        </>
    )
}

export default Navbar