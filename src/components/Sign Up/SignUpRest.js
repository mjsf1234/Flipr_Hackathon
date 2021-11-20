import React from 'react'
import classes from "./SignUpRest.module.css"
import { Navigate, Route } from 'react-router-dom';
import { useState, useRef } from 'react';
import axios from "../../axios"

function SignUpRest() {
    const nameInput = useRef();
    const passInput = useRef();

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });

    const restSignUpHandler = async (event) => {
        event.preventDefault();
        const res = await axios.post("/addRest", {
            name: nameInput.current.value,
            password: passInput.current.value,
            location: [latitude, longitude],
            items: []
        });
        console.log(res);
    }

    return (
        <form className={classes.form}>
            <input type="text" ref={nameInput} placeholder="Restuarant Name" />
            <input type="password" ref={passInput} placeholder="Restuarant Password" />
            <button className={classes.signup_button} onClick={restSignUpHandler}>Sign Up</button>
        </form>
    )
}

export default SignUpRest;
