import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import useGetRealTimeMessage from '../hooks/useGetRealTimemsgs'

const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();
    const {messages} = useSelector(store => store.message)
    
    if (!messages || !Array.isArray(messages)) return null

    return (
        <div className='px-2 flex-1 overflow-auto'>
            {messages.length > 0 ? (
                messages.map((message) => (
                    <Message key={message?._id} message={message} />
                ))
            ) : (
                <div className="text-center text-gray-500 mt-4">
                    No messages yet. Start the conversation!
                </div>
            )}
        </div>
    )
}

export default Messages