const express = require('express')

const jokesRoutes = express.Router()

jokesRoutes.get("/all",(req,res) =>{
    res.send("the server is running")
}).get("/text",(req,res)=>{
    res.send("the info from server comes in")
});


module.exports =  jokesRoutes 