//Using
const mongoose = require("mongoose");
require("dotenv").config();
//Define MongoDB Connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL;
console.log(mongoURL);

//Setup MongoDB Connection
mongoose.connect(mongoURL);

//Get the default connection
const db = mongoose.connection;

//Events @ time of Connection
db.on("connected", () => console.log("MONGO connected"));
db.on("open", () => console.log("MONGO open"));
db.on("disconnected", () => console.log("MONGO disconnected"));
db.on("reconnected", () => console.log("MONGO reconnected"));
db.on("disconnecting", () => console.log("MONGO disconnecting"));
db.on("close", () => console.log("MONGO close"));
db.on("error", (err) => console.log("MONGO error", err));

module.exports = db;
