import React,{useState} from "react";
import { Link } from "react-router-dom";

function SignUp()
{
   const [user,setUser]=useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
   })

   const handleCheckbox = ((gender) => 
    {
    setUser({ ...user, gender });
  })

   const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(user)
}

    return (
        <div className="min-w-96 mx-auto">
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
            <h1 className='text-3xl font-bold text-center'>Signup</h1>
            <form onSubmit={onSubmitHandler} action="">
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-300'>Full Name</span>
                </label>
                <input
                  value={user.fullName}
                  onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                  className='w-full input input-bordered h-10'
                  type="text"
                  placeholder='Full Name' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-300'>Username</span>
                </label>
                <input
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
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
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  className='w-full input input-bordered h-10'
                  type="password"
                  placeholder='Password' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-300'>Confirm Password</span>
                </label>
                <input
                  value={user.confirmPassword}
                  onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                  className='w-full input input-bordered h-10'
                  type="password"
                  placeholder='Confirm Password' />
              </div>
              <div className='flex items-center my-4 text-white justify-between'>
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
              <p className='text-center my-2 text-white'>Already have an account? <Link 
              to="/login"
              className="text-blue-600 hover:text-blue-700"> Login </Link></p>
              <div>
                <button type='submit' className='btn w-full  btn-sm mt-2 border border-slate-700'>Signup</button>
              </div>
            </form>
          </div>
        </div>
      )
}

export default SignUp