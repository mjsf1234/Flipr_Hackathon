import React from 'react'
<<<<<<< HEAD

const Login = () => {
    return (
        <div>
            <h1> THis is Login Page</h1>
        </div>
=======
import GoogleLogin from 'react-google-login'
import classes from "./Login.module.css"
import Card from "../UI/Card/Card"
import Form from './Form'

function Login() {
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }
    return (
        <Card className={classes.login_card}>
            <div className={classes.login_content}>
                <Form />
                <GoogleLogin
                    clientId="273708457264-7hld2e0ljomfgspe3l998fvhmanpmj8h.apps.googleusercontent.com"
                    buttonText="Login With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </Card>
>>>>>>> 87b81a4b06e2bf1ddab1483a145a97c921b14b66
    )
}

export default Login
