import React, { useState } from 'react'
import { mainNavData } from '../data/main-nav-data'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TbMinusVertical } from "react-icons/tb";

const MainNav = () => {
    const [focusVal, setFocusVal] = useState('')
    return (
        <>
            <div className="flex px-5 py-4 items-center justify-between ">
                <div className="flex items-center gap-10">
                    <div className="logo">
                        <img width={100} src="/svgs/logo.svg" height={100} alt="" />
                    </div>
                    <ul className='flex cursor-pointer   gap-4 items-center'>
                        {mainNavData?.map((item, index) => {
                            return <li className='relative text-sm hover:text-green-500 flex  items-center group' key={index}>
                                {item?.title}
                                {item?.list && <RiArrowDropDownLine className='transition-all duration-300 group-hover:rotate-180' size={20} />
                                }
                                {item?.list && (
                                    <ul className='hidden group-hover:text-black rounded-lg top-[40px] nested-ul group-hover:flex  absolute w-64 flex-col gap-2 bg-white shadow-xl border border-gray-200 px-5 py-3'>
                                        {item?.list?.map((item2, index2) => {
                                            return <li>
                                                {item2.title}
                                            </li>
                                        })}
                                    </ul>
                                )}

                            </li>
                        })}
                    </ul>
                </div>


                <div className="flex border border-gray-400  rounded-md gap-3 items-center">
                    <div onClick={() => setFocusVal('input')} className={`flex gap-2 ${focusVal == 'input' && 'border  border-gray-800 '} items-center rounded-md relative `}>
                        <CiSearch className='' />
                        <input className='border-0   p-2 outline-0' type="text" placeholder='Search' />

                    </div>
                    <TbMinusVertical size={20} />
                    <button onClick={() => setFocusVal('button')} className='cursor-pointer  p-2 flex items-center'>
                        Jobs
                        <RiArrowDropDownLine size={20} />
                    </button>

                </div>


            </div>
        </>
    )
}

export default MainNav