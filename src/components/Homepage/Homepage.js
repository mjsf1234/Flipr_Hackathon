import React from 'react'
import { restaurant } from '../../data/data'


import ExploreSection from '../exploreSection'
import Footer from '../footer'
import Header from '../header'
import Nav from '../Nav/nav'

const restaurantList = restaurant; 
// console.log( "im at the homepage page:  ", restaurantList)
const Homepage = () => {
    return (
        <div>
            <Nav/> 
            <Header/>
           
            <ExploreSection list = {restaurantList} showRst = {true} showItems ={false} restaurantName={''}/>  
             {/* list = [   {name:'',  location: '' , items: [] }   {R2}   {R3}  ] */}
            <Footer/>
        </div>
    )
}
export default Homepage
