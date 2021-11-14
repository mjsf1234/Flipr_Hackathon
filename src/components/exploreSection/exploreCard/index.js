import React from 'react'
import './exploreCard.css'
const ExploreCard = (props) => {
    
    console.log(props)
    return (

            <div className = "card">
                <img src = 'https://ooredoo.rltdplatform.com/AlbumResources//1/Images/Xlarge/Spicy%20Chicken-400x300px-1_2020-08-20-12-08-50.jpg' alt='restaurant_image'className=' card-image'/>
               
                <div className='restaurant-info'>
                    <p>{props.rstData.name}</p>
                    <p>{props.rstData.location}</p>
                </div>
                <div className = "apply">
                    <button onClic k  > Apply online</button>
                </div>
           </div>
    )
}

export default ExploreCard
