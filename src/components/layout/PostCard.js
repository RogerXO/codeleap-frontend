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
                    <p>{commentary} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti ducimus ut, ipsa provident vero recusandae fuga accusantium laborum veniam natus quia amet consequuntur qui minima nobis fugiat modi dolor! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora minima odit, alias neque aliquam saepe maiores quo atque! Incidunt vel cumque culpa soluta odit eius aperiam necessitatibus repudiandae beatae accusamus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, saepe. Ipsam hic esse distinctio quibusdam deleniti aut est reiciendis modi inventore sunt, consequatur at, natus ipsa doloribus iste neque cupiditate.</p>
                </div>
            </div>
        </section>
    )
}

export default PostCard