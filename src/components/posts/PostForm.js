import styles from './PostForm.module.css'

import { useState } from 'react'

function PostForm({ handleSubmit }) {
    const [title, setTitle] = useState()
    const [comment, setComment] = useState()
    const [post, setPost] = useState({})


    function handleTitle(e) {
        setTitle(e.target.value)
        setPost({
            ...post,
            title: e.target.value
        })
    }

    function handleComment(e) {
        setComment(e.target.value)
        setPost({
            ...post,
            content: e.target.value
        })
    }

    function submit(e) {
        e.preventDefault()
        handleSubmit(post)
        setTitle('')
        setComment('')
    }

    return (
        <div className={styles.postForm}>
            <h3>What's on your mind?</h3>
            <div className={styles.formContent}>
                <label htmlFor="post-title">Title</label>
                <input type="text" name="post-title" id="post-title" placeholder='Title' value={title} onChange={handleTitle} />
            </div>
            <div className={styles.formContent}>
                <label htmlFor="post-content">Content</label>
                <textarea name="post-content" id="post-content" cols="10" rows="10" placeholder='Your comment here' className={styles.postContent} value={comment} onChange={handleComment}></textarea>
            </div>
            <button onClick={submit} type="submit" disabled={!title || !comment}>CREATE</button>
        </div>
    )
}

export default PostForm