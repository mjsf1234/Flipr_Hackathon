import React from 'react'
import classes from "./Button.module.css"

function Button(props) {
    return (
        <button className={`${classes.button} ${props.className}`} onClick={props.onSignUp}>
            {props.children}
        </button>
    )
}

export default Button
