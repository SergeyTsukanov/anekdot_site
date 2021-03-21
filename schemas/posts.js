const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    text: String,
    author:String,
    type:String,
    title:String,
    likeCount:Number,
})

module.exports = mongoose.model('Jokes',postSchema)