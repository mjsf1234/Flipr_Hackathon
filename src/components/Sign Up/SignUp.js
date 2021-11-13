import React from 'react'
import classes from "./SignUp.module.css"
import Button from '../UI/Button/Button'

function SignUp() {
    return (
        <form className={classes.form}>
            <input type="text" />
            <input type="password" />
            <Button className={classes.signup_button}>Sign Up</Button>
        </form>
    )
}

export default SignUp
