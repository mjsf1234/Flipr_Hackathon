import React from 'react'
import ExploreCard from './exploreCard'
import './exploreSection.css'

 

const ExploreSection = ({list}) => {
    return (
        <div className= "explore-section max-width">
           <div className = "explore-grid-container ">
            {list.map((restaurant)=> {
                return  <ExploreCard rstData = {restaurant}/>
            })} 
           </div>
        </div>
    )
}

export default ExploreSection
