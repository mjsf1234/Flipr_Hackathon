import React from 'react'
import { restaurant } from '../../data/data'

import ExploreSection from '../exploreSection'
import Footer from '../footer'
import Header from '../header'

const restaurantList = restaurant; 
const Homepage = () => {
    return (
        <div>
            <h1> this is the Homepage</h1>
            <Header/>
        
            <ExploreSection list = {restaurantList} />
               
            <Footer/>
        </div>
    )
}
export default Homepage
