const express = require('express')
const Posts = require("../schemas/posts.js")
const jokesRoutes = express.Router()


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
    .get("/text" , (req, res) => {
        res.send("the info from server comes in")
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

    });


module.exports = jokesRoutes