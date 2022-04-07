import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: [
        {
            id: 0,
            userName: "teste",
            title: "teste",
            comment: "teste"
        }
    ],
    reducers: {
        createPost(prevState, { payload }) {
            return [
                ...prevState,
                {
                    id: prevState.length,
                    userName: payload.userName,
                    title: payload.title,
                    comment: payload.comment
                }
            ]
        }
    }
})


export const { createPost } = postSlice.actions

export const selectPost = state => state.posts

export default postSlice.reducer