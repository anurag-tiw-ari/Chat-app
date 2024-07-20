import React from "react";
import Messages from "./Messages";
import SendInput from "./SendInput";
import { useSelector } from "react-redux";

function MessageContainer()
{
    const {selectedUser}=useSelector(store=>store.user)
    let {authuser} =useSelector(store=>store.user)
    if(!authuser)
    {
        authuser=JSON.parse(localStorage.getItem('authuser'));
    }
    return (

        selectedUser ? (
               
                    <div className='w-full flex flex-col min-h-[400px]'>
                        <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 rounded-l-lg'>
                            <div>
                                <div className='w-9 rounded-full'>
                                    <img src={selectedUser?.profilePhoto || authuser?.profilePhoto} alt="user-profile" />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between gap-2'>
                                    <p>{selectedUser?.fullName || "No User Chat Selected"}</p>
                                </div>
                            </div>
                        </div>

                        <Messages />
                      <SendInput/>
                        
                    </div>
        ) : (
            <div className="w-full flex justify-center gap-3 flex-col items-center min-h-[400px] bg-zinc-700 bg-opacity-40">
                <h2 className="text-slate-300 hover:text-white text-3xl font-semibold">Welcome, <span className="text-yellow-400 hover:text-yellow-500 font-bsemiold">{authuser?.fullName}</span></h2>
                <h1 className="text-slate-300 hover:text-white text-4xl text-center">Start Conversation</h1>
                <h2 className="text-yellow-400 hover:text-yellow-500">Select Other Users</h2>
            </div>
        )
                
    
    )
}

export default MessageContainer