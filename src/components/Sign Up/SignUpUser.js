import React from 'react'
import classes from "./SignUpUser.module.css"
import axios from "../../axios";
import { useRef } from 'react';

function SignUpUser() {

    const nameInput = useRef();
    const passInput = useRef();

    const userSignUpHandler = async (event) => {
        event.preventDefault();
        const res = await axios.post("/addUser", {
            name: nameInput.current.value,
            password: passInput.current.value
        });
        console.log("Response after Sign Up: ", res);
    }

    return (
        <form className={classes.form}>
            <input type="text" ref={nameInput} />
            <input type="password" ref={passInput} />
            <button className={classes.signup_button} onClick={userSignUpHandler}>Sign Up</button>
        </form>
    )
}

export default SignUpUser
