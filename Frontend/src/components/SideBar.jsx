import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';


function SideBar(){

    return (
        <div className='border-l-2 border-slate-600 p-4 flex flex-col md:w-3/4 w-full min-h-[300px]'>
            <form  action="" className='flex items-center'>
                <input
                    
                    className='rounded-l-md p-1 w-full outline-none' type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='bg-white text-slate-500 p-1 rounded-r-md'>
                    <BiSearchAlt2 className='w-6 h-6 outline-none'/>
                </button>
            </form>
            
            <OtherUsers className="w-full overflow-auto"/> 
        </div>
    )
}

export default SideBar