const express = require('express')
const Posts = require("../schemas/posts.js")
const bodyParser = require("body-parser")
const jokesRoutes = express.Router()


jokesRoutes
    .get("/all", (req, res) => {
        Posts.find()
            .then((posts) => {
                res.json(posts)
            })
            .catch((err) => console.log("error"))
    })
    .get("/text", (req, res) => {
        res.send("the info from server comes in")
    })
    .post("/addjoke", bodyParser.json(), (req, res) => {

        console.log( req.body )
        const joke1 = new Posts({
            text: req.body.text,
            author: "Anonym",
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