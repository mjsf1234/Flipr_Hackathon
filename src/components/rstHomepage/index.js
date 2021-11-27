import { useParams } from 'react-router';
import React from 'react'
import { restaurant } from '../../data/data';
import ExploreSection from '../exploreSection';
import Nav from '../Nav/nav'
import axios from "../../axios"
import { useEffect, useState } from 'react'


const RstHomepage = () => {

    const [res, setRes] = useState([]);
    const params = useParams();
    const restaurantName = params.rstName.slice(1, params.length);
    console.log("Rest Name is ", restaurantName);
    useEffect(() => {
        async function getRestList() {
            const res = await axios.get('/addRest');
            setRes(res.data);
            // console.log("Rest Items shown from here are ", res.data);
        }
        getRestList();
    }, [])
    const findRst = (res !== []) ? res.find((rst) => rst.name === restaurantName) : null

    console.log("Rest Items shown from here are ", findRst);

    return (
        <div className='rstmenu'>
            {/* <div>
                <p> this is {restaurantName}</p>
            </div> */}
            {findRst && <ExploreSection list={findRst.items} showRst={false} showItems={true} restaurantName={restaurantName} />}
        </div>
    )
}

export default RstHomepage
