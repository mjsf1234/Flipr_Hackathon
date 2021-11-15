import React from 'react'
import RstHomepage from '../rstHomepage'
import ExploreCard from './exploreCard'
import './exploreSection.css'

 

const ExploreSection = (props) => {
    return (
        <div className= "explore-section max-width">
           <div className = "explore-grid-container ">

            {props.list.map((data)=> {
                {console.log('this is the data from RstHomepage', data)}
                return  <ExploreCard rstData = {data} showRst={props.showRst} showItems={props.showItems}/>
            })} 


           </div>
        </div>
    )
}

export default ExploreSection
