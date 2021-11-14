import React from 'react'
import classes from "./SignUpRest.module.css"
import { Navigate, Route } from 'react-router-dom';

function SignUpRest() {
    const restSignUpHandler = () => {
        return;
    }

    return (
        <Route>
            <form className={classes.form}>
                <input type="text" />
                <input type="password" />
                <button className={classes.signup_button} onClick={restSignUpHandler}>Sign Up</button>
            </form>
        </Route>
    )
}

export default SignUpRest;
