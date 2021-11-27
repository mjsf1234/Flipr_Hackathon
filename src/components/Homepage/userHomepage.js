import React from 'react'
import ExploreSection from '../exploreSection'
import Footer from '../footer'
import Header from '../header'
import Nav from '../Nav/nav'
import axios from "../../axios"
import { useEffect, useState } from 'react'


function UserHomepage() {
    const [res, setRes] = useState([]);
    useEffect(() => {
        async function getRestList() {
            const res = await axios.get('/addRest');
            setRes(res);
            // console.log(res.data);
        }
        getRestList();
    }, [])

    return (
        <div>
            {/* <Nav /> */}
            {/* <Header /> */}
            {/* {console.log("Rest data is : ", res)} */}
            {res.length !== 0 && <ExploreSection list={res} showRst={true} showItems={false} restaurantName={''} />}

            {/* list = [   {name:'',  location: '' , items: [] }   {R2}   {R3}  ] */}
            {/* <Footer /> */}
        </div>
    )
}

export default UserHomepage
