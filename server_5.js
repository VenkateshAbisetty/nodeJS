const express = require("express");// Loading Express server
const app = express();

const db = require("./MongoRelated/mongooseDB.js");//Loading db
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//Using Mongo Schema
const PersonModel = require("./MongoRelated/models/person.js");
const MenuModel = require("./MongoRelated/models/menu.js")
const { log } = require("console");

//GET Requests
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/chicken", (req, res) => {
    res.send("chicken is the best");
});

app.get("/idli", (req, res) => {
    res.send("Idli is world's best food");
});

app.get("/customizedIdli", (req, res) => {
    const customizedIdli = {
        name: "Ragi Idli",
        size: "10cm dia",
        is_sambar: true,
        is_chutney: false,
    };
    // res.send(customizedIdli);
    res.send("Item Name : " + customizedIdli.name);
});

app.get("/person",async (req, res)=>{
     await PersonModel.find()
    .then((data)=>{
        console.log("data of person fetched successfully");
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log("Error fetching person",err);
        res.status(500).json({error:"Internal Server error"});// Request failed 500 code})
    })
});

app.get('/menu', async (req,res)=>{
    await MenuModel.find()
    .then((data)=>{
        console.log("data of menu fetched successfully");
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log("error fetching menu");
        res.status(500).json({error:'Internal server error'});
    })
})

//POST Requests

//Posting person
app.post("/person", async (req, res) => {
     const data = req.body;
     const person = new PersonModel(data);
    await person.save()
    .then(()=>{ 
            console.log("data saved successfully");
            res.status(200).json({success : person});//Request passed 200 code
        })
   
    .catch((err)=>{
            console.log("Error saving person",err);
            res.status(500).json({error:"Internal Server error"});// Request failed 500 code})
        })
});

//Posting Menu
app.post('/menu', async (req,res)=>{
    const data = req.body;
    const menu = new MenuModel(data);
    await menu.save()
    .then(()=>{
        console.log("data saved successfully");
        res.status(200).json({success : menu});
    })
    .catch((err)=>{
        console.log("Error saving menu",err);
        res.status(500).json({error:"Internal server error"});
    })
})

//Listening on port hidden by DOTENV
app.listen(port, () => {
    console.log("I am Listening on port " + port);
});

//
