import React from 'react'
import { useDispatch,useSelector } from "react-redux";
//import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {
    
    return (
        <>
            <div className='flex gap-2 text-white hover:text-black items-center hover:bg-zinc-200 rounded py-1 px-2 cursor-pointer' >
                <div >
                    <div className='w-12 rounded-full'>
                        <img src={user.profilePhoto}  alt="user-profile" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-2 '>
                        <p>{user.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
    )
}

export default OtherUser