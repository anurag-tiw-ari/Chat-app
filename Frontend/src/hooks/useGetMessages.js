import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setMessages } from "../redux/messageSlice"

const useGetMessages = () => {
    const { selectedUser } = useSelector(store => store.user)
   const dispatch=useDispatch()
    const fetchMessages = async () => {
        try {
            axios.defaults.withCredentials = true
            if (selectedUser?._id) {
                const res = await axios.get(`https:/chat-app-5-4dgk.onrender.com//api/v1/message/get/${selectedUser._id}`)
             console.log(res)

             dispatch(setMessages(res.data))
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMessages()
    }, [selectedUser])

    
}

export default useGetMessages
