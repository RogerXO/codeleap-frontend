import styles from "./MainScreen.module.css"

import { useState } from 'react'

import PostForm from "../layout/PostForm"
import PostCard from "../layout/PostCard"

function MainScreen() {

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.top}>CodeLeap Network</h2>
                <PostForm />
                <PostCard title="" userName="" timer="" commentary="" />
            </div>
        </div>
    )
}

export default MainScreen