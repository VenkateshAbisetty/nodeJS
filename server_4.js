const express = require("express");

const app = express();
const db = require("./MongoRelated/mongooseDB.js");
require("dotenv").config();
const port = process.env.PORT || 3000;

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
