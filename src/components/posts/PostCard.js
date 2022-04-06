import styles from './PostCard.module.css'

import binpng from '../../images/bin.png'
import editpng from '../../images/edit.png'

function PostCard({ id, title, userName, timer, comment }) {
    return (
        <section key={id}>
            <div className={styles.postCard}>
                <div className={styles.postHeader}>
                    <h3>{title}</h3>
                    <div className={styles.iconsDiv}>
                        <img src={binpng} alt="delete" />
                        <img src={editpng} alt="edit" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.userName}>
                        <p>@{userName ? userName : "someone else"}</p>
                        <span>{timer ? timer : "x seconds ago"}</span>
                    </div>
                    <p>{comment}</p>
                </div>
            </div>
        </section>
    )
}

export default PostCard