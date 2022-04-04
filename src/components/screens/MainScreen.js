import styles from "./MainScreen.module.css"

import { useState, useEffect } from 'react'

import PostForm from "../posts/PostForm"
import PostCard from "../posts/PostCard"

function MainScreen() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://codeleap-test-api.herokuapp.com/posts", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        })
            .then(resp => resp.json())
            .then(data => setPosts(data))
            .catch(err => alert(err))
    }, [])

    // create post

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.top}>CodeLeap Network</h2>
                <PostForm />
                {posts && posts.map((post) => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        userName={post.userName}
                        timer={post.timer}
                        commentary={post.content} />
                ))}
            </div>
        </div>
    )
}

export default MainScreen