const express = require("express");
const router = express.Router();
//Using Mongo Schema
const MenuModel = require("../MongoRelated/models/menu.js");

//Posting Menus
router.post('/', async (req,res)=>{
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
});

//Get Requests
router.get('/', async (req,res)=>{
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
module.exports = router;