import React from 'react'
import { useSelector } from 'react-redux';
import classes from "./Homepage.module.css";
import RestHomepage from './restHomepage';
import UserHomepage from './userHomepage';

function Homepage() {
    const restSignIn = localStorage.getItem('signInRst')
    const userSignIn = localStorage.getItem('signInUser')
    console.log(restSignIn, userSignIn);
    return (
        <div className={classes.homepage}>
            {restSignIn && <RestHomepage />}
            {userSignIn && <UserHomepage />}
        </div>
    )
}
export default Homepage


