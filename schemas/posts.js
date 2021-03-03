const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    text: String,
    author:String,
    type:String,
    title:String
})

module.exports = mongoose.model('Jokes',postSchema)