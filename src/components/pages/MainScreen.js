import styles from "./MainScreen.module.css"

import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import PostForm from "../posts/PostForm"
import PostCard from "../posts/PostCard"
import { selectPost } from '../redux/actions/PostSlice'

function MainScreen() {
    // - Create a timer when create post
    // - Open delete alert (only your own items)
    // - Open edit modal (only your own items)
    // - pass the userName

    const posts = useSelector(selectPost)
    console.log(posts)

    //Get posts
    // useEffect(() => {
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

    // create new post
    // function createPost(post) {
    //     fetch("https://codeleap-test-api.herokuapp.com/posts", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(post)
    //     })
    //         .then(resp => resp.json())
    //         .then(data => console.log("post created", data))
    //         .catch(err => console.log(err))
    // }

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