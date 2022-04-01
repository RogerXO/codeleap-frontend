import styles from "./MainScreen.module.css"

import { useState } from 'react'

function MainScreen() {


    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <h2>CodeLeap Network</h2>
                </div>
                <div className={styles.creatingContainer}>
                    <div className={styles.postForm}>
                        <h3>What's on your mind?</h3>
                        <form>
                            <div className={styles.titleDiv}>
                                <label htmlFor="post-title">Title</label>
                                <input type="text" name="post-title" id="post-title" />
                            </div>
                            <div className={styles.contentDiv}>
                                <label htmlFor="post-content">Content</label>
                                <input type="text" name="post-content" id="post-content" />
                            </div>
                            <button type="submit" disabled>CREATE</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainScreen