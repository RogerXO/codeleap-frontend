import styles from './PostCard.module.css'

import binpng from '../../images/bin.png'
import editpng from '../../images/edit.png'

function PostCard({ title, userName, timer, commentary }) {
    return (
        <section>
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
                        <p>@{userName}</p>
                        <span>{timer}</span>
                    </div>
                    <p>{commentary}</p>
                </div>
            </div>
        </section>
    )
}

export default PostCard