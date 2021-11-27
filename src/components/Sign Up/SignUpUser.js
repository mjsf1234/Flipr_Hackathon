import React from 'react'
import classes from "./SignUpUser.module.css"
import axios from "../../axios";
import { useRef } from 'react';
import Card from '../UI/Card/Card';

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
        <Card className={classes.form_card}>
            <form className={classes.form}>
                <input type="text" ref={nameInput} placeholder="UserName" />
                <input type="password" ref={passInput} placeholder="Password" />
                <button className={classes.signup_button} onClick={userSignUpHandler}>Sign Up</button>
            </form>
        </Card>
    )
}

export default SignUpUser
