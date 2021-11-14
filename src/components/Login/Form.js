import React from 'react'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import classes from "./Form.module.css"

function Form(props) {
    return (
        <form className={classes.form}>
            <input type="text" />
            <input type="password" />
            <Button className={classes.login_button}>Login</Button>
            <Button className={classes.login_button} onSignUp={props.onSignUp}>Sign Up</Button>
        </form>
    )
}

export default Form
