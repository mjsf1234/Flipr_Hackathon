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
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getRestList() {
            const res = await axios.get('/addRest');
            setRes(res);
            // console.log(res.data);
        }
        getRestList();
    }, [])

    useEffect(() => {
        async function getOrdersList() {
            const res = await axios.get('/orderStatus');
            setOrders(res);
            // console.log(res.data);
        }
        getOrdersList();
    }, [])

    const items = res.length !== 0 ? res.data.find(rst => rst.name == restName) : [];
    const temp_orders = orders.length !== 0 ? orders.data.find(rst => rst.rstName == restName) : [];
    console.log("Item Found is ", items);
    console.log("Orders fetched are ", temp_orders);

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

            <Card className={classes.itemsList}>
                {items.length !== 0 ? items.items.map((item) => (
                    <ul>
                        <li className={classes.itemFocus} onClick={
                            async () => {
                                const res = await axios.post('/removeItem',
                                    {
                                        restName: localStorage.getItem("RstName"),
                                        item: [item.itemName, item.itemPrice]
                                    })
                                console.log("Response is : ", res);
                            }
                        }>
                            {item.itemName}
                            {" - Rs." + item.itemPrice}
                        </li>
                        <hr />
                    </ul>
                )) : null}
            </Card>


            <Card className={classes.activeOrders}>
                {temp_orders.length !== 0 ? temp_orders.users.map((user) => (
                    <ul>
                        <li className={classes.orders}>
                            {"Username - " + user.username}
                            {user.items.map((item) => {
                                return <p>
                                    {"Item Name - " + item.itemName + " "}
                                    {"Quantity - " + item.quantity + " "}
                                    {"Price per Item - Rs." + item.price}
                                </p>
                            })}
                            <button onClick={
                                async () => {
                                    const res = await axios.post('/changeActiveOrders',
                                        {
                                            rstName: localStorage.getItem("RstName"),
                                            userName: user.username,
                                            orderStatus: "Accept"
                                        })
                                }
                            }>Accept the order</button>

                            <button onClick={
                                async () => {
                                    const res = await axios.post('/changeActiveOrders',
                                        {
                                            rstName: localStorage.getItem("RstName"),
                                            userName: user.username,
                                            orderStatus: "Reject"
                                        })
                                }
                            }>Reject the order</button>

                            <button onClick={
                                async () => {
                                    const res = await axios.post('/deleteTheOrder',
                                        {
                                            rstName: localStorage.getItem("RstName"),
                                            userName: user.username,
                                        })
                                }
                            }>Delete the Order</button>
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