import React from 'react'
import { sidebarData } from '../data/sidebarData'

const Sidebar = ({ show, setShow }) => {
    return (
        <>
            <div className={`min-h-screen ${show ? 'traslate-x-0' : '-translate-x-full'} transition-all bg-white fixed w-full top-0 z-50`}>
                <ul className="unstyled flex mt-15 flex-col">
                    {sidebarData?.map((item, index) => {
                        return <li key={item.id} className="flex py-7 px-5 jusitfy-between">
                            {item.name}
                        </li>
                    })}

                </ul>
            </div>
        </>
    )
}

export default Sidebar