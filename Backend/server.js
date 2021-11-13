import express from "express";
import moongoose from 'mongoose'
import userDb from "./userDb.js";

//App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = "mongodb+srv://admin:4YOOe9I81yArvzJG@cluster0.snzz5.mongodb.net/foodDeliveryDB?retryWrites=true&w=majority"
//MiddleWares

//DB Config, Password --> 4YOOe9I81yArvzJG
moongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//API EndPoints
app.get("/", (req, res) => {
    res.status(200).send("Hey People")
})

app.post('/addUser', (req, res) => {
    const userData = req.body;

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



//Listener

app.listen(port, () => console.log(`Listening on Port: ${port}`));