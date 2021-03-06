const express = require("express")
require("dotenv").config()
const User = require("../schemas/users")
const jwt = require("jsonwebtoken")
const usersRoutes = express.Router()
const bcrypt = require("bcrypt")
const Posts = require("../schemas/posts")

usersRoutes
    .post("/signup", async (req, res) => {
        console.log(req.body)
        const email = await User.findOne({ email: req.body.email })

        if (email) 
        return res.status(400).send({status:"failed",text:"User already exist"})
        
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.password, salt)

        const user = new User({
            login: req.body.login,
            email: req.body.email,
            password: hashPass,
            savedPosts:[],
            likedPosts:[]
        })

        await user.save()
        savedPosts = await Posts.find().where('_id').in(user.savedPosts)
        likedPosts = await Posts.find().where('_id').in(user.likedPosts)
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN)
        res.json({token:token,login:user.login,savedPosts:savedPosts,likedPosts:likedPosts})
    })

    .post("/login", async (req, res) => {
        const user = await User.findOne({ email: req.body.email })

        if (!user) 
        
        return res.status(400).send({status:"failed",text:"wrong email or password"})

        const checkPass = await bcrypt.compare(req.body.password, user.password)
        if (!checkPass) 
        return res.status(400).send({status:"failed",text:"wrong email or password"})

        const token = jwt.sign({ _id: user._id }, process.env.TOKEN,{expiresIn:86400})
        savedPosts = await Posts.find().where('_id').in(user.savedPosts)
        likedPosts = await Posts.find().where('_id').in(user.likedPosts)
        res.json({token:token,login:user.login,savedPosts: savedPosts,likedPosts:likedPosts})
    })



module.exports = usersRoutes

