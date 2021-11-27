import React, { Fragment, useState } from 'react'
import Cart from '../Cart/cart'
import ExploreCard from './exploreCard'
import './exploreSection.css'



const ExploreSection = (props) => {
    // props = {list:[ {R1} {R2}  {R3}] ,  showItem :false, showRst:true  } When home page call explore section
    //props = {list:[ [R1.Items]  [R2.items] [R3.items] ] ,  showItem :true, showRst:false  }  When Rsthomepage call explore section
    const [cartShow, setCartShow] = useState(false);
    const cartHandler = () => {
        setCartShow(!cartShow);
    }
    return (
        <Fragment>
            <div className="explore-grid-container explore-section max-width">
                {/* {console.log(' this is the props from homepage', props.list)} */}
                {props.showRst && props.list.data.map((data) => {
                    // list = [ {R1}   {R2}  {R3} ]  , data = loop over R1, R2,R3 
                    return <ExploreCard rstData={data} showRst={props.showRst} showItems={props.showItems} restaurantName={props.restaurantName} />
                    // rstData =  {R}   where R = R1, R2, R3 
                    //rstdata = [  [burget,20]   [pizaa,40]    []  ] 

                })}
                {props.showItems && props.list.map((data) => {
                    // list = [ {R1}   {R2}  {R3} ]  , data = loop over R1, R2,R3 
                    return <ExploreCard rstData={data} showRst={props.showRst} showItems={props.showItems} restaurantName={props.restaurantName} />
                    // rstData =  {R}   where R = R1, R2, R3 
                    //rstdata = [  [burget,20]   [pizaa,40]    []  ] 

                })}

                {/* <Cart restaurantName={props.restaurantName} /> */}
            </div>
            <div className="cart-button">
                {props.showItems && <button onClick={cartHandler}>Cart</button>}
            </div>
            {cartShow && <div className="cart-box" >
                <Cart restaurantName={props.restaurantName} />
            </div>}
        </Fragment>
    )
}

export default ExploreSection
