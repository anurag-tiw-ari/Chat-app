import React, { useState } from 'react'
import { IoSend } from "react-icons/io5"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'

const SendInput = () => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const { selectedUser } = useSelector(store => store.user)
    const { messages } = useSelector(store => store.message)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(
                `https://chat-app-5-4dgk.onrender.com/api/v1/message/send/${selectedUser?._id}`,
                { message },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true
                }
            )
            console.log(res)
            dispatch(setMessages([...messages, res?.data?.newMessage])) // Correctly append new message
        } catch (error) {
            console.error("Error sending message:", error)
        }
     //   alert(message)
        setMessage("")
    }

    return (
        <form onSubmit={onSubmitHandler} className='px-4 my-3 py-2'>
            <div className='w-full relative'>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    placeholder='Send a message...'
                    className='border text-sm rounded-lg block w-full outline-none p-2 border-zinc-500 bg-gray-600 text-white'
                />
                <button type="submit" className='absolute flex inset-y-0 end-0 items-center pr-4'>
                    <IoSend className='text-2xl'/>
                </button>
            </div>
        </form>
    )
}

export default SendInput


