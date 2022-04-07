import { createSlice } from "@reduxjs/toolkit";

export const userNameSlice = createSlice({
    name: "userName",
    initialState: { userName: "" },
    reducers: {
        toggleUserName: (prevState, payload) => {
            prevState.userName = payload
        }
    }
})

export const { toggleUserName } = userNameSlice.actions

export const selectUserName = state => state.userName.userName.payload

export default userNameSlice.reducer