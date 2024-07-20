import React from "react"
import { Link } from "react-router-dom"

function LandingPage()
{
    return (
        
        <div className="h-screen w-full bg-primary overflow-hidden" >
        <div className="navbar bg-base-300 h-[2rem] bg-opacity-90">
                    <div className="flex-1">
                        <Link className="btn btn-ghost text-xl" to="/">Chat App</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                        <li><Link className="font-semibold text-xl hover:text-blue-600" to="/login">Login</Link></li>
                        <li>
                        
                            <Link className="font-semibold text-xl hover:text-blue-600" to="/register">Signup</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
            <div className=" overflow-hidden flex justify-center items-center mt-8">
                
                    <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1 flex flex-col gap-20" 
                        style={{backgroundImage:`url("https://www.shutterstock.com/image-vector/seamless-pattern-outline-icons-seo-600nw-659141167.jpg")`}}>
                            <h1 className="text-4xl text-center text-yellow-300 rounded-lg hover:text-white font-bold bg-primary p-3 pb-4">Fun Chat App</h1>
                            <button class="btn bg-primary hover:text-black text-white"><Link to="/login">Start Chat</Link></button>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
            
    )
}
export default LandingPage