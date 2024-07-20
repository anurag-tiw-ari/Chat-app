import React, { useState } from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import OtherUsers from './OtherUsers';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';
function SideBar(){

    const [search,setSearch] =useState("")
    const {otherUsers}=useSelector(store=>store.user)
    const dispatch=useDispatch()

    function onSubmitHandler(e)
    {
        e.preventDefault()

        const searchUser = otherUsers?.find((user) => 
            user.username.toLowerCase() === search.toLowerCase()
        );
        if(searchUser)
        {
            dispatch(setOtherUsers([searchUser]))
        }
        else{
            toast.error("Username Not Valid")
        }
      //  dispatch(setOtherUsers([otherUsers]))
    }

    return (
        <div className='border-l-2 border-slate-600 px-4 pt-1 flex flex-col md:w-3/4 w-full h-[280px] md:h-full'>
            <form  onSubmit={onSubmitHandler} action="" className='flex items-center'>
                <input
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className='rounded-l-md p-1 w-full outline-none' type="text"
                    placeholder='Search...'
                />
                <button type='submit' className='bg-white text-slate-500 p-1 rounded-r-md'>
                    <BiSearchAlt2 className='w-6 h-6 outline-none'/>
                </button>
            </form>
            
            <OtherUsers className="w-full overflow-auto mb-0"/> 
        </div>
    )
}

export default SideBar