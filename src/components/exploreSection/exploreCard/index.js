import { useDispatch } from 'react-redux';
import { cartAction } from '../../Store/cartSlice';
import { useHistory } from 'react-router'
import React from 'react';
import './exploreCard.css';
import { restaurant } from '../../../data/data';




const ExploreCard = (props) => {
    console.log( ' this is the data pass to explore card' ,props)

    const  dispatch = useDispatch();
    const history = useHistory();

    function routeRst(){
        console.log('Apply Online button is clicked' , props)
        history.push({
            pathname: `/rstHomepage?${props.rstData.name}`
        }
        );
        return;
    }
    const printPage = ()=>{
        console.log('propsData of Rest whose Button is clicked',props)
    }
    
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
                <button onClick = {printPage}> props deatils </button>
            </div>}

            {/* Display the items */}
           {props.showItems && <div className = "card"> 
           
                <div className='restaurant-info'>
                    <p> {props.rstData[0]} </p>
                    <p> {props.rstData[1]} </p>
                    <p> {props.restaurantName}</p>
                                        
                </div>
                <div className = "add-to-cart">
                   <button onClick = { () => {
                       dispatch(cartAction.addToCart( {rstName:props.restaurantName, rstItem:props.rstData[0], price:props.rstData[1]  }));
                       
                   }}>  Add to cart</button>
                </div>
           </div>}
           </div>
    )
}

export default ExploreCard
