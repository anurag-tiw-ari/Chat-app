import React,{useState} from "react";
import { Link } from "react-router-dom";

function Login()
{
    return (
        <div className="min-w-96 mx-auto">
          <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <form  action="">
    
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-300'>Username</span>
                </label>
                <input
                  
                  className='w-full input input-bordered h-10'
                  type="text"
                  placeholder='Username' />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text text-slate-300'>Password</span>
                </label>
                <input
                  className='w-full input input-bordered h-10'
                  type="password"
                  placeholder='Password' />
              </div>
              <p className='text-center my-2 text-white'>Don't have an account? <Link to="/signup" class="text-blue-600 hover:text-blue-700"> Signup </Link></p>
              <div>
                <button type="submit" className='btn w-full btn-sm mt-2 border border-slate-700'>Login</button>
              </div>
            </form>
          </div>
        </div>
      )
}

export default Login