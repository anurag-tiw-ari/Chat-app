import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import useGetRealTimeMessage from '../hooks/useGetRealTimemsgs'

const Messages = () => {
   
    useGetMessages();
     useGetRealTimeMessage();
    const {messages} = useSelector(store=>store.message)
    if(!messages) return 

    

    return (
        <div className='px-2 flex-1 overflow-y-scroll '>
           
        {
            messages.map((message)=>{
                return (
                    <Message key={message?._id} message={message} />
                )
            })
        }

        </div>


    )
}

export default Messages