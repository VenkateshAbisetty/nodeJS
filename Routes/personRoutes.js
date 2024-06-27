const express = require("express");
const router = express.Router();
//Using Mongo Schema
const PersonModel = require("../MongoRelated/models/person.js");

//Posting person
router.post("/", async (req, res) => {
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

//Getting person
    //NORMAL
        router.get('/',async (req, res)=>{
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

    //PARAMETERISED
        router.get('/:workType',async (req,res)=>{
            const role = req.params.workType;
            if(role=="chef"|| role == "waiter" || role =="manager"){
                await PersonModel.find({work:role})
                .then((data)=>{
                    console.log("data of roles are fetched");
                    res.status(200).json({success : data})
                })
                .catch((err)=>{
                    console.log("error fetching role");
                    res.status(500).json({error:"Internal Server Error"})
                })
            }
            else{
                console.log("data of roles doesn't exist");
                res.status(404).send("Not Found")

            }
        });

//Updating person
//Updated to chef and waiter
    router.put('/:id',async (req,res)=>{
        const id = req.params.id;
        const data = req.body;
        await PersonModel.findByIdAndUpdate(id,data,{new:true,runValidators:true})
        .then((data)=>{
            console.log("data updated");
            res.status(200).json({success:data});
        })
        .catch((err)=>{
            console.log("data not updated");
            res.status(500).json({error:"Internal Server error"});
        })

    })       
    
//Deleting person
//deleting a waiter
    router.delete('/:id',async  (req, res)=>{
        const id = req.params.id;
        await PersonModel.findByIdAndDelete(id)
        .then(()=>{
            console.log("Deleted person");
            res.status(200).json({message : "Person deleted Successfully"})
        })
        .catch((err)=>{
            console.log("Deletion failed");
            res.status(500).json({error: "Internal Server Error"})
        })
    })    

    module.exports = router;
