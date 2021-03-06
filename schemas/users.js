const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    savedPosts:{
        type:Array,
        require: true,
    },
    likedPosts:{
        type:Array,
        require: true,
    }
})

module.exports = mongoose.model("Users", UserSchema)