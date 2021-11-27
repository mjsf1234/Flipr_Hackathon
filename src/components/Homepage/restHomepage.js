import React, { Fragment } from 'react'
import Card from '../UI/Card/Card';
import classes from "./restHomepage.module.css";
import axios from "../../axios"
import { useRef, useState, useEffect } from "react";

function RestHomepage() {

    const itemName = useRef();
    const itemPrice = useRef();

    const restName = localStorage.getItem("RstName");

    const [res, setRes] = useState([]);
    useEffect(() => {
        async function getRestList() {
            const res = await axios.get('/addRest');
            setRes(res);
            // console.log(res.data);
        }
        getRestList();
    }, [])

    const items = res.length !== 0 ? res.data.find(rst => rst.name == restName) : [];
    console.log("Item Found is ", items);

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

    // const removeItemHandler = (event) => {
    //     console.log("Clicked on : ", event.target)
    // }

    return (
        <div className={classes.rstHome}>
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
                {items.length !== 0 ? items.items.map((item) => (
                    <ul>
                        <li className={classes.itemFocus} onClick={
                            () => {
                                console.log(item[0]);
                            }
                        }>
                            {item[0]}
                        </li>
                        <hr />
                    </ul>
                )) : null}
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