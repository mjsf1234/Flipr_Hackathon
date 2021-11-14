import React from 'react'
import classes from "./Form.module.css"
import axios from "../../axios";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../store/userSlice';
import { useState } from 'react';

function Form(props) {
    const dispatch = useDispatch();
    const nameInput = useRef();
    const passInput = useRef();

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });

    const loginHandler = async (event) => {
        event.preventDefault();
        const req = await axios.get("/addUser");
        console.log(req.data);
        const usersData = req.data;
        for (const userNo in usersData) {
            if (usersData[userNo].name === nameInput.current.value) {
                if (usersData[userNo].password === passInput.current.value) {
                    dispatch(userActions.setSignInInfo({
                        name: nameInput.current.value,
                        location: [latitude, longitude],
                        signIn: true
                    }))
                    console.log("User Login Done");
                }
            }
        }
    }

    const signUpHandler = async (event) => {
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
            <button className={classes.login_button} onClick={loginHandler}>Login</button>
            <button className={classes.login_button} onClick={signUpHandler}>Sign Up</button>
        </form>
    )
}

export default Form
