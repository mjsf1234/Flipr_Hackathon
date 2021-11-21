import { useParams } from 'react-router';
import React from 'react'
import { restaurant } from '../../data/data';
import ExploreSection from '../exploreSection';
import Nav from '../Nav/nav'




const RstHomepage = () => {
    
    const params = useParams();
    const restaurantName = params.rstName.slice(1,params.length);  

    const findRst = restaurant.find( (rst) => rst.name === restaurantName )
    console.log('check ' , findRst.item[0]);
            
    return (
        <div >

            <div>
                <Nav/>
            </div>
           
            <div className = 'rstmenu'>
                <div>
                    <p> this is { restaurantName }</p>
                </div>
                <ExploreSection list = {findRst.item} showRst = {false} showItems ={true} restaurantName={restaurantName}  />
            </div>
        </div>
    )

}

export default RstHomepage
