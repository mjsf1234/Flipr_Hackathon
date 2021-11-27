import React from 'react'
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
        <div className={classes.login_background}>
            <Card className={classes.login_card}>
                <Form />
                <GoogleLogin
                    clientId="273708457264-7hld2e0ljomfgspe3l998fvhmanpmj8h.apps.googleusercontent.com"
                    buttonText="Login With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Card>
        </div>
    )
}

export default Login
