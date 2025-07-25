import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';


const OtherUser = ({user}) => {

    const dispatch=useDispatch()
    const {selectedUser,onlineUsers}=useSelector(store=>store.user)
    console.log("uid",user?._id)
    const isOnline = (onlineUsers || []).includes(String(user?._id));
    console.log("io:",isOnline)
    function selectedUserHandler(user){
         
        dispatch(setSelectedUser(user))
    }
    
    return (
        <>
            <div 
            className={` ${selectedUser?._id===user?._id ? "bg-zinc-200 text-black":"text-white"}  flex gap-2  hover:text-black items-center hover:bg-zinc-200 rounded py-1 px-2 cursor-pointer`}
            onClick={()=>{
                selectedUserHandler(user)
            }} >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-9 rounded-full'>
                        <img src={user?.profilePhoto}  alt="user-profile" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-2 '>
                        <p>{user?.username}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'></div>
        </>
    )
}

export default OtherUser