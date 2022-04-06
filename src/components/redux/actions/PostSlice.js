import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from 'react'

// get posts
// const getFetch = useEffect(() => {
//     fetch("https://codeleap-test-api.herokuapp.com/posts", {
//         method: "GET",
//         headers: {
//             "Content-type": "application/json",
//         }
//     })
//         .then(resp => resp.json())
//         .then(data => setPosts(data))
//         .catch(err => console.log(err))
// }, [posts])

export const postSlice = createSlice({
    name: "post",
    initialState: [
        {
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
                    userName: payload.userName,
                    title: payload.title,
                    comment: payload.comment
                }
            ]
        }
    }
})


export const { createPost } = postSlice.actions


console.log(createPost())

export const selectPost = state => state.posts

export default postSlice.reducer