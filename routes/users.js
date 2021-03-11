const express = require("express")
const User = require("../schemas/users")
const jwt = require("jsonwebtoken")
const usersRoutes = express.Router()
const bcrypt = require("bcrypt")
usersRoutes.post("/reqister", (req,res) =>{
    console.log(req.body)
    const email = User.findOne(req.body.email)
     
     if(email) return res.status(400).send("user already exist")
    //const salt = await bcrypt.genSalt(10)
    //const hashPass = await bcrypt.hash(req.body.password,salt)
   
    const user = new User({
        login:req.body.login,
        email:req.body.email,
        password:  req.body.password
    })

  user.save()
     
    res.send("registered")
}).get("/test",(req,res) => {
    res.send("1111")
})
 

module.exports = usersRoutes

