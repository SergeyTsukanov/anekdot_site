const jokesRoutes  = require("./routes/posts")

const express = require("express")
const mongoose = require('mongoose')
const app = express()


dataUrl = 'mongodb+srv://user:xmPmkdeFiPBXOzyM@cluster0.w3yrj.mongodb.net/jokesData?retryWrites=true&w=majority'
 
mongoose.connect(dataUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{console.log("connected to db")}).catch((err)=>console.log("error"))

const Post = mongoose.model('Jokes',new mongoose.Schema({
    text: String,
    author:String,
    type:String,
    title:String
}))




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use( '/posts', jokesRoutes)

app.get('/addjoke1',(req,res)=>{
    const joke1 = new Post({    text: "Колобок повесился",
        author:"Ципа",
        type:"Умора",
        title:"Про Колобка"})
    Post.create(joke1,(err)=>{
        if (err){
             console.log("smth goes wrong")
        }
       
    })
    res.send("ad joke to the server")
})

 


app.listen("3001",() =>{
    console.log("Backend is start")
})

