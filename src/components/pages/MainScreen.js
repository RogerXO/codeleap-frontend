import styles from "./MainScreen.module.css"

import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import PostForm from "../posts/PostForm"
import PostCard from "../posts/PostCard"
import { selectPost } from '../redux/actions/PostSlice'

function MainScreen() {
    // - get the api data
    // - Open delete alert (only your own items)
    // - Open edit modal (only your own items)

    const posts = useSelector(selectPost)

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.top}>CodeLeap Network</h2>
                <PostForm postData={posts} />
                {posts && posts.map((post) => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        userName={post.userName}
                        timer={post.timer}
                        comment={post.comment} />
                )).reverse()}
            </div>
        </div>
    )
}

export default MainScreen