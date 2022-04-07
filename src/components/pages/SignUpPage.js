import styles from './SignUpPage.module.css'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleUserName } from '../redux/actions/UserNameSlice'
import { selectUserName } from '../redux/actions/UserNameSlice'


function SignUpPage() {
    const userName = useSelector(selectUserName)
    const dispatch = useDispatch()

    function setUserName(e) {
        dispatch(toggleUserName(e.target.value))
    }

    // function submitUser{
    //     //redirect to MainPage
    // }


    return (
        <section className={styles.background}>
            <div className={styles.signup}>
                <h2>Welcome to CodeLeap Network</h2>
                <div>
                    <p>Please, enter you username</p>
                    <input type="text" onChange={setUserName} />
                </div>
                <Link to="/mainScreen" className={styles.btn}> <button disabled={!userName}>ENTER</button> </Link>
            </div>
        </section >
    )
}

export default SignUpPage