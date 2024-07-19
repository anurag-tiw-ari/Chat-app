import React,{useState} from "react";
import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function HomePage()
{
  const navigate=useNavigate();

   async function logoutHandler()
   {
    try{
          axios.defaults.withCredentials=true  
          const res  =   await axios.get("http://localhost:8000/api/v1/user/logout")
          navigate("/login")
          toast.success(res.data.message)
    }
    catch(error){
      console.log(error)
    }
   }

     return (
        <div className="flex flex-col">
        <div className='border-slate-500 border-2 gap:2 flex md:h-[550px] h-[600px] md:w-[800px] w-[400px] md:flex-row flex-col rounded-lg overflow-hidden bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <MessageContainer className="order-1" />
      <SideBar className="order-2" />
    </div>
    <div className='mt-8 mx-auto'>
                <button className='btn btn-sm' onClick={logoutHandler}>Logout</button>
            </div>
    </div>
     )
}

export default HomePage