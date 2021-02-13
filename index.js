const express = require("express")

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.listen("3001",() =>{
    console.log("Backend is start")
})

app.get("/",(req,res) =>{
    res.send("the server is running")
})

app.get("/text",(req,res)=>{
    res.send("the info from server comes in")
})