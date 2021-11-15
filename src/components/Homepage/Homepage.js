import React from 'react'
import { restaurant } from '../../data/data'


import ExploreSection from '../exploreSection'
import Footer from '../footer'
import Header from '../header'

const restaurantList = restaurant; 
console.log( "im at the homepage page:  ", restaurantList)
const Homepage = () => {
    return (
        <div>
            <Header/>
            
            <ExploreSection list = {restaurantList} showRst = {true} showItems ={false}/>
            <Footer/>
        </div>
    )
}
export default Homepage
