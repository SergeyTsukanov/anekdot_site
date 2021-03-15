const jokesRoutes  = require("./routes/posts")
const express = require("express")
const mongoose = require('mongoose')
const usersRoutes = require("./routes/users")
const verifyToken = require("./middleware")
require("dotenv").config()
const app = express()

const verfyToken = require("./middleware")
 

mongoose
.connect(`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.w3yrj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` , {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log("connected to db")})
.catch((err)=>console.log("errr"))



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.json())

app.use('/auth', usersRoutes)
app.use(verifyToken)
app.use('/posts', jokesRoutes)

app.listen("3001",() =>{
    console.log("Backend has started")
})

