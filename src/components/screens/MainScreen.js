import styles from "./MainScreen.module.css"

import { useState } from 'react'

import PostForm from "../layout/PostForm"

function MainScreen() {

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2>CodeLeap Network</h2>
                </div>
                <div className={styles.content}>
                    <PostForm/>
                </div>
            </div>

        </div>
    )
}

export default MainScreen