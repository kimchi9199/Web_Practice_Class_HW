const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const Card = require("./dbCard");



//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://test:sPoHBSD0nXYLx5nM@test.z6kobm1.mongodb.net/lab'

//Middleware
app.use(express.json());
app.use(cors());

//DB Config
mongoose.connect(connection_url)

//API Endpoint
app.get("/", (req,res) => {
    res.status(200).send("Hello TheWebDev")
})

app.post('/dating/card', (req,res) => {
    const dbCard = req.body;
    Card.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
} )

app.get('/dating/card', (req,res) => {
    Card.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
} )


//Listener
app.listen(port, ()=>
 console.log(`Listening on localhost: ${port}`))