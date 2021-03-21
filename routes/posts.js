const express = require('express')
const Posts = require("../schemas/posts.js")
const jokesRoutes = express.Router()
const verifyToken = require('../middleware')
const Users = require('../schemas/users.js')


jokesRoutes.use("/addjoke",verifyToken)
jokesRoutes.use("/likejoke",verifyToken)
jokesRoutes
    .get("/all", async (req, res) => {
        try {
            const posts = await Posts.find()
            res.json(posts)
        }
        catch (e) {
            console.log(e)
        }
    })
    .post("/addjoke", (req, res) => {

        console.log(req.body)
        const joke1 = new Posts({
            text: req.body.text,
            author: req.body.author,
            type: req.body.type,
            title: req.body.title
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
        user.likedPosts.push(req.body._id)
        await user.save()
        res.sendStatus(200)
    })

module.exports = jokesRoutes