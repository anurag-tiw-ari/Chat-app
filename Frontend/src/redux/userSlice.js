import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        authuser: null,
        otherUsers: [],
        selectedUser: null,
        onlineUsers:[]
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authuser = action.payload;
        },
        setOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        setOnlineUser: (state, action) => {
            state.onlineUsers = action.payload;
        }
    }
});

export const { setAuthUser, setOtherUsers, setSelectedUser ,setOnlineUser} = userSlice.actions;

export default userSlice.reducer;
