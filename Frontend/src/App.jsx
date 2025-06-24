import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/signup';
import Login from './components/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { setSocket } from './redux/socketSlice';
import { setOnlineUser } from './redux/userSlice';
import LandingPage from './components/LandingPage';

const router = createBrowserRouter([
  {path: "/", element: <LandingPage />},
  { path: "/chat", element: <HomePage /> },
  { path: "/register", element: <SignUp /> },
  { path: "/login", element: <Login /> }
]);

function App() {
  const { authuser } = useSelector(store => store.user);
  const { socket } = useSelector(store=>store.socket)
  const dispatch = useDispatch();

  useEffect(() => {
    if (authuser) {
      
      const newsocket = io("https://chat-app-5-4dgk.onrender.com", {
        query: {
          userId: authuser._id
        }
      });

      dispatch(setSocket(newsocket));

      newsocket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUser(onlineUsers));
        console.log("ou:",onlineUsers)
      });

      

      return () => {
        newsocket.disconnect();
      };
    }
  

    else {
      if(socket){
           socket.close();
           dispatch(setSocket(null))
      }
    }
  }, [authuser,dispatch]);

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

