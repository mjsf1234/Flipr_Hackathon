import React from 'react'
import Counter from '../../Counter_check';
import { restaurant } from '../../data/data';
import ExploreSection from '../exploreSection';




const RstHomepage = () => {
    console.log('Im at homepage', restaurant[0].item[0])
    return (
        <div >
           
            <div className = 'rstmenu'>
                <div>
                    <p> this is { restaurant[1].name}</p>
                    
                    <Counter/>
                </div>
                <ExploreSection list = {restaurant[0].item} showRst = {false} showItems ={true}  />
            </div>
        </div>
    )
}

export default RstHomepage
