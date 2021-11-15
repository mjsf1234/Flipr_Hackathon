import { useHistory } from 'react-router'
import React from 'react'
import './exploreCard.css'
const ExploreCard = (props) => {
    
    const history = useHistory();

    function routeRst(){
        console.log('Route')
        history.push({
            pathname: "/rstHomepage"
        }
        );
        return;
    }

    console.log("Data from ExploreCard", props.showItems, props.showRst  )
    return (
            <div>           
            {props.showRst && <div className = "card">
                <img src = 'https://ooredoo.rltdplatform.com/AlbumResources//1/Images/Xlarge/Spicy%20Chicken-400x300px-1_2020-08-20-12-08-50.jpg' alt='restaurant_image'className=' card-image'/>
               
                <div className='restaurant-info'>
                    <p>{props.rstData.name}</p>
                    <p>{props.rstData.location}</p>
             
                </div>
                <div className = "apply">
                    <button onClick = {routeRst}> Apply online</button>
                </div>
           </div>}

           {props.showItems && <div className = "card">
               
               
                <div className='restaurant-info'>
                     {console.log(props.rstData )}
                    <p> {props.rstData[0]} </p>
                    <p> {props.rstData[1]} </p>                     
                </div>
                <div className = "apply">
                    <button > + </button>
                    <button > - </button>
                </div>
           </div>}
           </div>
    )
}

export default ExploreCard
