import { configureStore } from "@reduxjs/toolkit";

import postReducer from './actions/PostSlice'

export default configureStore({
    reducer: {
        posts: postReducer
    }
})