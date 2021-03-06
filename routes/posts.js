const express = require('express')
const Posts = require("../schemas/posts.js")
const jokesRoutes = express.Router()
const verifyToken = require('../middleware')
const Users = require('../schemas/users.js')


jokesRoutes.use("/addjoke",verifyToken)
jokesRoutes.use("/savejoke",verifyToken)
jokesRoutes.use("/removejoke",verifyToken)
jokesRoutes.use("/saved",verifyToken)
jokesRoutes
 
    .get("/all", async (req, res) => {
        try {
            const posts = await Posts.find()
            res.json(posts)
        }
        catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    })
    .get("/:id", async (req,res)=>{
        try {
            
            const posts = await Posts.findOne({_id:req.params.id})
            res.status(200).send(posts)
        }
        catch (e) {
            console.log(e)
            res.status(400).send(e)
        }
    })
    .post("/addjoke", (req, res) => {

        console.log(req.body)
        const joke1 = new Posts({
            text: req.body.text,
            author: req.body.author,
            type: req.body.type,
            title: req.body.title,
            likesCount:req.body.likesCount 
        })
        Posts.create(joke1, (err) => {
            if (err) {
                console.log("smth goes wrong")
            }

        })
         res.send("ad joke to the server")

    })
    .put("/savejoke", async (req,res) =>{
        
        const user =  await Users.findOne({login:req.body.login})
        console.log(user)
        user.savedPosts.push(req.body._id)
        await user.save()
        console.log(user.savedPosts)
        ResponsePosts = await Posts.find().where('_id').in(user.savedPosts)
        res.status(200).send({savedPosts:ResponsePosts})
    })
    .delete("/removejoke",async (req,res) =>{
        const user =  await Users.findOne({login:req.body.login})
        console.log(user)
        user.savedPosts.pull(req.body._id)
        await user.save()
        console.log(user.savedPosts)
        ResponsePosts = await Posts.find().where('_id').in(user.savedPosts)
        res.status(200).send({savedPosts:ResponsePosts})
    }).put("/likejoke",async (req,res) =>{
 
        const user =  await Users.findOne({login:req.body.login})
        console.log(user)
        user.likedPosts.push(req.body._id)
        await user.save()
        console.log(user.likedPosts)
        ResponsePosts = await Posts.find().where('_id').in(user.likedPosts)
        res.status(200).send({likedPosts:ResponsePosts})
    }).put("/unlikejoke",async (req,res) =>{
 
        const user =  await Users.findOne({login:req.body.login})
        console.log(user)
        user.likedPosts.pull(req.body._id)
        await user.save()
        console.log(user.likedPosts)
        ResponsePosts = await Posts.find().where('_id').in(user.likedPosts)
        res.status(200).send({likedPosts:ResponsePosts})
    })

module.exports = jokesRoutes