import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import messageReducer from "./messageSlice";
import sockeReducer from "./socketSlice";

const store=configureStore({
    reducer:{
        user:userReducer,
        message:messageReducer,
        socket:sockeReducer
    }
});

export default store