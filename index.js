const jokesRoutes  = require("./routes/posts")
 const Posts = require("./schemas/posts")
const express = require("express")
const mongoose = require('mongoose')
const app = express()


 
mongoose.connect("mongodb://localhost:27017" , {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log("connected to db")}).catch((err)=>console.log("error"))



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use( '/posts', jokesRoutes)
// test request
app.get('/addjoke1',(req,res)=>{
    const joke1 = new Posts({    text: "Колобок повесился",
        author:"Ципа",
        type:"Умора",
        title:"Про Колобка"})
    Posts.create(joke1,(err)=>{
        if (err){
             console.log("smth goes wrong")
        }
       
    })
    res.send("ad joke to the server")
})

app.listen("3001",() =>{
    console.log("Backend is start")
})

