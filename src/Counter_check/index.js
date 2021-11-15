import React from 'react'

const Counter = () => {
    return (
        <div className = "container">
            <h1> increament/decreament</h1>
            <div className ="quantity">
                <button className = "quantity_minus" title = "decreament" > - </button>
                
                <input name = "quantity" type = "Text" className = "quantity-input" value = "0"/>
                <button className = "quantity_minus" title = "increament" > + </button>
               

            </div>
        </div>
    )
}

export default Counter
