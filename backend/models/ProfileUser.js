const Mongoose = require('mongoose')

const ProfileUserSchema = new Mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    fullName:{
        type:string,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    MobileNumber:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    technicalSkills:{
        type:Array,
        required:true           
    },
    bio:{
        type:String
    }
})