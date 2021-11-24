import React from 'react'
<<<<<<< HEAD
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
=======
import { useSelector } from 'react-redux';
import classes from "./Homepage.module.css";
import RestHomepage from './restHomepage';
import UserHomepage from './userHomepage';

function Homepage() {
    const restSignIn = useSelector(state => state.rest.signIn);
    const userSignIn = useSelector(state => state.user.signIn);
    console.log(restSignIn, userSignIn);
    return (
        <div className={classes.homepage}>
            {restSignIn && <RestHomepage />}
            {userSignIn && <UserHomepage />}
>>>>>>> 87b81a4b06e2bf1ddab1483a145a97c921b14b66
        </div>
    )
}
export default Homepage


