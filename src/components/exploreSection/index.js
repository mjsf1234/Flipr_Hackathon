import React from 'react'
import Cart from '../Cart/cart'
import ExploreCard from './exploreCard'
import './exploreSection.css'



const ExploreSection = (props) => {
    // props = {list:[ {R1} {R2}  {R3}] ,  showItem :false, showRst:true  } When home page call explore section
    //props = {list:[ [R1.Items]  [R2.items] [R3.items] ] ,  showItem :true, showRst:false  }  When Rsthomepage call explore section

    return (

        <div className="explore-section max-width">
            <div className="explore-grid-container ">
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
                {props.showItems && <Cart restaurantName={props.restaurantName} />}
            </div>
        </div>
    )
}

export default ExploreSection
