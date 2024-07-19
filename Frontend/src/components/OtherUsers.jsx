import React from 'react'
import OtherUser from './OtherUser';
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import useGetOtherUsers from '../hooks/useGetOtherUsers';


const OtherUsers = () => {
    // my custom hook
    
   useGetOtherUsers()
   const {otherUsers}=useSelector(store=>store.user)
   if(!otherUsers)  return;        //early return


    

    return (
        <div className='overflow-auto flex-1 mt-3'>
               
               {
                otherUsers.map((user)=>{
                    return (
                        <OtherUser key={user._id} user={user} />
                    )
                })
               }
          

        </div>
    )
}

export default OtherUsers