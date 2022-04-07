import { configureStore } from "@reduxjs/toolkit";

import postReducer from './actions/PostSlice'
import userNameReducer from './actions/UserNameSlice'



export default configureStore({
    reducer: {
        posts: postReducer,
        userName: userNameReducer
    }
})