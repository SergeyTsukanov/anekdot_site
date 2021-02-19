const express = require('express')
const Posts = require("../schemas/posts.js")
const jokesRoutes = express.Router()


jokesRoutes.get("/all", (req, res) => {
    Posts.find()
        .then((posts) => {
            res.json(posts)
        })
        .catch((err) => console.log("error"))
}

).get("/text", (req, res) => {
    res.send("the info from server comes in")
});


module.exports = jokesRoutes 