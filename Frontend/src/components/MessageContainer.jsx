import React from "react";
import Messages from "./Messages";
import SendInput from "./SendInput";
import { useSelector } from "react-redux";
import { useState } from "react";

function MessageContainer({ setIsSelect,isSelect }) {

    const [text,setText]=useState("Search")
    const { selectedUser } = useSelector(store => store.user);
    let { authuser } = useSelector(store => store.user);
    if(!authuser)
    {
        authuser=JSON.parse(localStorage.getItem("authuser"))
    }

    function selectUserHandler() {
        if(!isSelect)
        {
        setIsSelect(true);
        setText("Close")
        }
        else
        {
            setIsSelect(false);
            setText("Search")
        }

    }

    return (
        selectedUser ? (
            <div className='w-full flex flex-col min-h-[400px] justify-between' >
                <div className='flex gap-2 items-center bg-zinc-700 text-white px-4 py-2 rounded-l-lg'>
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
                            <SendInput />
                        
            </div>
        ) : (
            <div className="w-full flex justify-center gap-3 flex-col items-center min-h-[400px] bg-white bg-opacity-90">
                <h2 className="text-slate-900 hover:text-black text-5xl font-bold text-center mb-2">Welcome, <span className="text-blue-500 hover:text-blue-600 font-semiold">{authuser?.fullName}</span></h2>
                <h1 className="text-slate-900 hover:text-black text-4xl text-center">Start Conversation</h1>
                <h2 className="text-white bg-black hover:text-gray-300 rounded-xl p-2 text-lg w-64 text-center mt-4" onClick={selectUserHandler}>{text} Other Users</h2>
            </div>
        )
    );
}

export default MessageContainer;
