const jokesRoutes  = require("./routes/posts")
 const Posts = require("./schemas/posts")
const express = require("express")
const mongoose = require('mongoose')
 require("dotenv").config()
const app = express()

// mongodb+srv://admin:<password>@cluster0.w3yrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.w3yrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` , {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log("connected to db")}).catch((err)=>console.log("error"))



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use( '/posts', jokesRoutes)

app.listen("3001",() =>{
    console.log("Backend has started")
})

