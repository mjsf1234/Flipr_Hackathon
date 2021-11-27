import express from "express";
import moongoose from 'mongoose'
import userDb from "./userDb.js";
import Cors from 'cors';
import restDb from "./restDb.js";
import activeOrdersDb from "./activeOrdersDb.js";

//App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://admin:4YOOe9I81yArvzJG@cluster0.snzz5.mongodb.net/foodDeliveryDB?retryWrites=true&w=majority"
//MiddleWares

app.use(express.json());
app.use(Cors());

//DB Config, Password --> 4YOOe9I81yArvzJG
moongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Sign up or Login User.

app.post('/addUser', (req, res) => {
    const userData = req.body; // {name: "", password: ""}
    userDb.create(userData, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data);
        }
    })
})

app.get('/addUser', (req, res) => {
    userDb.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
})

// Sign Up or Login Restuarant.

app.post("/addRest", (req, res) => {
    const restData = req.body;
    // {name: "", password: "", location: [], items: []}
    restDb.create(restData, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
    const initialRest = restData.name;
    activeOrdersDb.create({ rstName: initialRest })
})

app.get("/addRest", (req, res) => {
    restDb.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// Add Items and Price in Restuarants Database

app.post("/addItem", (req, res) => {
    const ItemsData = req.body; // {restName: "", addItem: ["Pizza", "123"]};
    console.log(ItemsData);
    restDb.findOneAndUpdate({ name: ItemsData.restName }, { $push: { items: [ItemsData.addItem] } }, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.send("Record has been Updated..!!");
        }
    });
});

// Fetch Online Orders which are pending.....
app.get("/orderStatus", (req, res) => {
    activeOrdersDb.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
})

app.post("/orderStatus", (req, res) => {
    const orderData = req.body;
    // orderData ==> {userName: "", rstName: "", 
    // items: [{itemName: "", quantity: "", price: ""}], 
    // totalAmount: "", 
    // orderStatus: "" }
    activeOrdersDb.findOneAndUpdate({ rstName: orderData.rstName },
        {
            $push: {
                users: [{
                    username: orderData.userName,
                    items: orderData.items,
                    totalAmount: orderData.totalAmount,
                    orderStatus: orderData.orderStatus
                }]
            }
        },
        (err) => {
            if (err) {
                res.send(err);
            } else {
                res.send("Order has been placed");
            }
        }
    )
})

// This function is Pending Order is not being updated 
app.post("/changeActiveOrders", (req, res) => {
    const changeOrderData = req.body; // {rstName: rstName, userName: userName, orderStatus: "Rejected"} 

    if (changeOrderData.orderStatus === "Reject") {
        activeOrdersDb.findOneAndUpdate({
            rstName: changeOrderData.rstName,
            "users.name": changeOrderData.userName
        },
            {
                "$set": {
                    "users.$.orderStatus": "Rejected"
                }
            }, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send("Order Rejected");
                }
            }
        );
    } else {
        activeOrdersDb.findOneAndUpdate({
            rstName: changeOrderData.rstName,
            "users.name": changeOrderData.userName
        },
            {
                "$set": {
                    "users.$.orderStatus": "Accepted"
                }
            }, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send("Order Accepted");
                }
            }
        );
    }


})

// Listener

app.listen(port, () => console.log(`Listening on Port: ${port}`));