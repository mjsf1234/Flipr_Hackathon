import React from 'react'
import Card from '../UI/Card/Card';
import classes from "./restHomepage.module.css";
import axios from "../../axios"
import { useSelector } from 'react-redux';
import { useRef } from "react";

function RestHomepage() {

    const itemName = useRef();
    const itemPrice = useRef();

    const restName = useSelector(state => state.rest.name);

    const addItemHandler = async (event) => {
        event.preventDefault();

        const temp_item_name = itemName.current.value;
        const temp_item_price = itemPrice.current.value;

        const ItemsData = {
            restName: restName,
            addItem: [temp_item_name, temp_item_price]
        }
        const res = await axios.post("/addItem", ItemsData);
        console.log("Response after Item Add: ", res);
    }

    return (
        <div>
            <Card className={classes.restHomepage}>

                <form className={classes.restForm}>
                    <label for="fname">Item Name</label>
                    <input type="text" id="fname" name="firstname" ref={itemName} placeholder="Item Name" />

                    <label for="lname">Item Price</label>
                    <input type="number" id="lname" name="lastname" ref={itemPrice} placeholder="Price" />
                    <button onClick={addItemHandler}>Add Item</button>
                </form>
            </Card>

            <Card className={classes.activeOrders}>

            </Card>
        </div>
    )
}

export default RestHomepage


// [
//     {
//         name: "Vandhan",
//         items: [{"Burger": 25.4}, {"Pizza": 256}]
//     },
// ]