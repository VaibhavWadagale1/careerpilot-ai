const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:2,
        max:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    lastLoginAt:{
        type:Date,

    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
   

},{timestamps: true})

module.exports = mongoose.model('User',userSchema)
