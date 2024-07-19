import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";


function Login()
{

    const [user,setUser]=useState({
        
        username:"",
        password:"",
        
       })
       
       const dispatch = useDispatch();
       const navigate=useNavigate()
    
       const onSubmitHandler = async (e) => 
        {
        e.preventDefault();
        try {
            const res= await axios.post(`http://localhost:8000/api/v1/user/login`,user,{
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })
    
          // console.log(res)
         console.log(res.data)

           if(res.data.success)
            {
                navigate("/")
                toast.success(res.data.message)
            }

            dispatch(setAuthUser(res.data))

        } catch (error) {

          toast.error(error.response.data.message)
            
        }
    }
    

    return (
        <div className="w-96 mx-auto">
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <form  onSubmit={onSubmitHandler} action="">
    
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-300'>Username</span>
                </label>
                <input
                  value={user.username}
                  onChange={((e)=>{setUser({...user,username:e.target.value})})}
                  className='w-full input input-bordered h-10'
                  type="text"
                  placeholder='Username' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-300'>Password</span>
                </label>
                <input
                value={user.password}
                onChange={((e)=>{setUser({...user,password:e.target.value})})}
                  className='w-full input input-bordered h-10'
                  type="password"
                  placeholder='Password' />
              </div>
              <p className='text-center my-2 text-white'>Don't have an account? <Link to="/register" class="text-blue-600 hover:text-blue-700"> Signup </Link></p>
              <div>
                <button type="submit" className='btn w-full btn-sm mt-2 border border-slate-700'>Login</button>
              </div>
            </form>
          </div>
        </div>
      )
}

export default Login