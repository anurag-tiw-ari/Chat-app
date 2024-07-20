import React, { useEffect, useRef } from 'react'
import {useSelector} from "react-redux";

const Message = ({message}) => 
    {

        const scroll=useRef();

        let {authuser} =useSelector(store=>store.user)
    if(!authuser)
    {
        authuser=JSON.parse(localStorage.getItem('authuser'));
    }
    const {selectedUser}=useSelector(store=>store.user)
      //  console.log("authID:",authuser?._id)
      //  console.log(message?.senderId)

        useEffect(()=>{
            scroll.current?.scrollIntoView({behaviour:"smooth"})
        })
    
    return (
        <>
      <div ref={scroll} className={`chat ${authuser?._id===message?.senderId ? "chat-end":"chat-start"}`}>
        <div className="chat-image avatar">
          <div className="w-9 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={authuser?._id===message?.senderId ? authuser?.profilePhoto : selectedUser?.profilePhoto} />
          </div>
        </div>
        <div className="chat-bubble ">{message?.message}</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
        </>
        
    )
}

export default Message