import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function SignUp()
{
   const [user,setUser]=useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
   })
   const navigate=useNavigate()

   const handleCheckbox = ((gender) => 
    {
    setUser({ ...user, gender });
  })

   const onSubmitHandler = async (e) => 
    {
    e.preventDefault();
    try {
        const res= await axios.post(`https://chat-app-5-4dgk.onrender.com/api/v1/user/register`,user,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })

     //   console.log(res)
   //  console.log(res.data.success)
    if(res.data.success)
    {
        toast.success(res.data.message)
        navigate("/login")

    }

    } 
        catch (error) {

            toast.error(error.response.data.message)
            console.log("signup-error: ",error)
        }
        
    
}

    return (
      <section className="h-screen w-screen flex items-center bg-blue-700 ">
        <div className="w-96 mx-auto">
          <div className='w-full p-6 rounded-2xl shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 border border-gray-100'>
            <h1 className='text-3xl font-bold text-center'>Signup</h1>
            <form onSubmit={onSubmitHandler} action="">
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-900'>Full Name</span>
                </label>
                <input
                  value={user.fullName}
                  onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                  className='w-full input input-bordered h-10 outline-none'
                  type="text"
                  placeholder='Full Name' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-900'>Username</span>
                </label>
                <input
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  className='w-full input input-bordered h-10 outline-none'
                  type="text"
                  placeholder='Username' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-900'>Password</span>
                </label>
                <input
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  className='w-full input input-bordered h-10 outline-none'
                  type="password"
                  placeholder='Password' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-900'>Confirm Password</span>
                </label>
                <input
                  value={user.confirmPassword}
                  onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                  className='w-full input input-bordered h-10 outline-none'
                  type="password"
                  placeholder='Confirm Password' />
              </div>
              <div className='flex items-center my-4 text-slate-900 justify-between'>
                <div className='flex items-center'>
                <label htmlFor="Male">Male</label>
                  <input
                    type="checkbox"
                   // checked={user.gender==="male"}
                    onChange={() => handleCheckbox("male")}
                    className="checkbox mx-1 bg-white" id="Male"
                     />
                </div>
                <div className='flex items-center'>
                <label htmlFor="Female">Female</label>
                  <input
                    type="checkbox"
                    checked={user.gender==="female"}
                    onChange={() => handleCheckbox("female")}
                    className="checkbox mx-1 bg-white" id="Female"
                    />
                </div>
                <div className='flex items-center'>
                  <label htmlFor="Others">Others </label>
                  <input
                    type="checkbox"
                    checked={user.gender==="others"}
                    onChange={() => handleCheckbox("others")}
                    className="checkbox mx-1 bg-white" 
                    id="Others"
                    />
                </div>
              </div>
              <p className='text-center my-2 text-gray-900'>Already have an account? <Link 
              to="/login"
              className="text-blue-600 hover:text-blue-900"> Login </Link></p>
              <div>
                <button type='submit' className=' w-full rounded-lg  btn-sm mt-2  bg-black text-white hover:text-gray-300'>Signup</button>
              </div>
            </form>
          </div>
        </div>
        </section>
      )
}

export default SignUp