import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm h-16 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            DirectMessage
          </Link>
          <div className="flex gap-4">
            <Link to="/login" className="px-4 py-2 text-gray-700 hover:text-blue-600">
              Login
            </Link>
            <Link to="/register" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Chat Preview */}
            <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gray-100 p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-800">Team Chat</h3>
              </div>
              <div className="p-4 h-64 overflow-y-auto space-y-3">
                <div className="flex justify-start">
                  <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs">
                    <p className="text-gray-800">Hey team, how's the project going?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-blue-600 rounded-lg px-4 py-2 max-w-xs">
                    <p className="text-white">Making good progress! Should finish by Friday</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs">
                    <p className="text-gray-800">Great! Let me know if you need anything</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  <Link to="/login">Send</Link> 
                  </button>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Simple, focused messaging
              </h1>
              <p className="text-gray-600 text-lg">
                Just what you need for team communication - nothing more.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/register" 
                  className="inline-block w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center font-medium"
                >
                  Create Account
                </Link>
                <Link 
                  to="/login" 
                  className="inline-block w-full md:w-auto px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 text-center font-medium"
                >
                  Existing User? Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;