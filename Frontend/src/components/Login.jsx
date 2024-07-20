import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";
import { setSelectedUser } from "../redux/userSlice";


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
         console.log("logindata:",res.data.loggedInUser)

           if(res.data.success)
            {
              dispatch(setAuthUser(res.data.loggedInUser))
              localStorage.setItem('authuser', JSON.stringify(res.data.loggedInUser));
              dispatch(setSelectedUser(null))
                navigate("/chat")
                toast.success(res.data.message)
            }



        } catch (error) {

          toast.error(error.response.data.message)
            
        }
    }
    

    return (
      <section className="h-screen w-screen flex items-center bg-blue-700 ">
        <div className="w-96 mx-auto">
          <div className='w-full p-6 rounded-2xl shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 border border-gray-100'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <form  onSubmit={onSubmitHandler} action="">
    
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-900'>Username</span>
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
                  <span className='text-base label-text text-slate-900'>Password</span>
                </label>
                <input
                value={user.password}
                onChange={((e)=>{setUser({...user,password:e.target.value})})}
                  className='w-full input input-bordered h-10'
                  type="password"
                  placeholder='Password' />
              </div>
              <p className='text-center my-2 text-slate-900'>Don't have an account? <Link to="/register" class="text-blue-600 hover:text-blue-800"> Signup </Link></p>
              <div>
                <button type='submit' className=' w-full rounded-lg  btn-sm mt-2  bg-black text-white hover:text-gray-300'>Login</button>
              </div>
            </form>
          </div>
        </div>
        </section>
      )
}

export default Login