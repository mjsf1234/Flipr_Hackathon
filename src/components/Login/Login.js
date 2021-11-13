import React from 'react'
import GoogleLogin from 'react-google-login'
import classes from "./Login.module.css"

function Login() {
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }
    return (
        <div>
            <GoogleLogin
                clientId="273708457264-7hld2e0ljomfgspe3l998fvhmanpmj8h.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login
