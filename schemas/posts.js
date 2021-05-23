const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    text: String,
    author:String,
    type:String,
    title:String,
    likesCount:Number,
})

module.exports = mongoose.model('Jokes',postSchema)