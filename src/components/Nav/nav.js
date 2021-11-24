import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagCheckFill } from "react-icons/bs";
import'./nav.css'

 
const Nav = () => {
    return (
        <div className = 'nav'>
            <nav className='navbar'>
                <a href='#'> #home</a>
                <a href='#'> #deatils</a>
                <a href='#'> #reviews</a>
            </nav>
            
                <div className = 'nav-left'>
                    {/* <h2>this is for photo</h2> */}
                    <img src = '/logo_website.png ' className = 'nav-img'/> 
                </div>
                <div className = 'nav-right'>
                    <Link to ="/cart">
                        <div className = 'basket'>
                        <BsFillBagCheckFill/>
                        </div>
                    </Link>
                </div>

                      
            
        </div>
    )
}

export default Nav;
