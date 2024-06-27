const express = require("express");// Loading Express server
const app = express();

const db = require("./MongoRelated/mongooseDB.js");//Loading db
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


const port = process.env.PORT || 3000;

// //Using Mongo Schema
// const PersonModel = require("./MongoRelated/models/person.js");
// const MenuModel = require("./MongoRelated/models/menu.js")
const { log } = require("console");

//Routing person requests CREATED "Routes" FOLDER, personRoutes.js
const personRoute = require("./Routes/personRoutes.js");
app.use('/person',personRoute);
//Routing menu requests CREATED "Routes" FOLDER, menuRoutes.js
const menuRoute = require("./Routes/menuRoutes.js");
app.use('/menu',menuRoute);

//GET Requests //
//NORMAL
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


//Listening on port hidden by DOTENV
app.listen(port, () => {
    console.log("I am Listening on port " + port);
});

//
