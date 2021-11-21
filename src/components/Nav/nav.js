import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagCheckFill } from "react-icons/bs";
import'./nav.css'
 
const Nav = () => {
    return (
        <div className = 'nav'>
            <div className = ' nav-container'>
                <div className = 'nav-left'>
                    <h2>this is for photo</h2>
                    {/* <img src = 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png' className = 'nav-img'/>  */}
                </div>
                <div className = 'nav-right'>
                    <Link to ="/cart">
                        <div className = 'basket'>
                        <BsFillBagCheckFill/>
                        </div>
                    </Link>
                </div>

            </div>            
            
        </div>
    )
}

export default Nav;
