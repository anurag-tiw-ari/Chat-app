import React,{useState} from "react";
import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setAuthUser, setSelectedUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";



function HomePage()
{
  const [isSelect,setIsSelect]=useState(false)
  const navigate = useNavigate();
    const dispatch = useDispatch();
    let { authuser } = useSelector(store => store.user) ;
    if(!authuser)
      {
          authuser=JSON.parse(localStorage.getItem('authuser'));
      }

    // Hook to check authentication status
    useEffect(() => {
        if (!authuser) {
            navigate("/login");
        }
    }, [authuser, navigate]);


   async function logoutHandler()
   {
    try{
      
          axios.defaults.withCredentials=true  
          const res  =   await axios.get("http://localhost:8000/api/v1/user/logout")
          navigate("/login")
          toast.success(res.data.message)
          dispatch(setAuthUser(null))
          localStorage.setItem('authuser',null);
    }
    catch(error){
      console.log(error)
    }
   }

     return (
      <section className="bg-black w-full h-screen flex justify-center items-center">
        <div className="flex flex-col">
        <div className='gap:2 flex md:h-[550px] h-[600px] md:w-[800px] w-[400px] md:flex-row flex-col rounded-lg overflow-hidden bg-white '>
      <MessageContainer className="order-1" setIsSelect={setIsSelect} isSelect={isSelect} />
      <SideBar className="order-2"  isSelect={isSelect}/>
    </div>
    <div className='mt-8 mx-auto'>
                <button className='btn btn-sm' onClick={logoutHandler}>Logout</button>
            </div>
    </div>
    </section>
     )
}

export default HomePage