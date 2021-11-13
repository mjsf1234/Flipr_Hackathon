import React from 'react'
import './Homepage.css'

function Homepage(props) {
    return (
        <div className = "main-container">
            <h1>{props.sending_data}</h1>
        </div>
    )
}

export default Homepage
