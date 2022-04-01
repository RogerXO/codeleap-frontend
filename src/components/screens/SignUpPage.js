import styles from './SignUpPage.module.css'

import { useState } from 'react'

function SignUpPage() {
    const [userName, setUserName] = useState("")

    function handleName(e) {
        setUserName(e.target.value)
    }

    return (
        <section className={styles.background}>
            <div className={styles.signup}>
                <h2>Welcome to CodeLeap Network</h2>
                <div>
                    <p>Please, enter you username</p>
                    <input type="text" value={userName} onChange={handleName} />
                </div>
                <button type="submit" disabled={!userName}>ENTER</button>
            </div>
        </section >
    )
}

export default SignUpPage