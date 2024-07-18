import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import SignUp from './components/signup'
import Login from './components/Login'


const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage />
  },
  {
    path:"/register",
    element:<SignUp />
  },
  {
    path:"/login",
    element:<Login />
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-4 flex justify-center items-center h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
