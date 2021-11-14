import React from 'react'
import { useSelector } from 'react-redux';
import classes from "./Homepage.module.css";
import RestHomepage from './restHomepage';
import UserHomepage from './userHomepage';

function Homepage() {
    const restSignIn = useSelector(state => state.rest.signIn);
    const userSignIn = useSelector(state => state.user.signIn);
    console.log(restSignIn, userSignIn);
    return (
        <div className={classes.homepage}>
            {restSignIn && <RestHomepage />}
            {userSignIn && <UserHomepage />}
        </div>
    )
}

export default Homepage


