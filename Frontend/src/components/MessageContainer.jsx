import React from "react";
import Messages from "./Messages";
import SendInput from "./SendInput";

function MessageContainer()
{

    return (
               
                    <div className='w-full flex flex-col min-h-[400px]'>
                        <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2 rounded-l-lg '>
                            <div>
                                <div className='w-12 rounded-full'>
                                    <img src="" alt="user-profile" />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between gap-2'>
                                    <p>Anurag</p>
                                </div>
                            </div>
                        </div>

                        <Messages />
                      <SendInput/>
                        
                    </div>
                
    
    )
}

export default MessageContainer