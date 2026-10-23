const User = require('../models/User.js') 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const env = require('dotenv')
env.config()

const register = async(req,res) =>{
    try{
        const {name,email,password,role} = req.body
        const dbuser = await User.findOne({email});
        console.log(dbuser)
        if (dbuser !== null){
            return res.status(400).json({message:"User Exist"})

        }
        const hashedPass = await bcrypt.hash(password,10)
        const user = new User({
            name,
            email,
            password:hashedPass,
            role

        })
        const savedUser = await user.save()
        return res.status(201).json(savedUser)
    }catch(e){
        res.status(400).send(e.message)
    }

}

const login = async(req,res) =>{
    try{
        const{email,password} = req.body
        console.log(req.body)
        const user = await User.findOne({email})
        if (!user){
            return res.status(404).json({message:"Invalid Email ID"})
        }
        const matchPass = await bcrypt.compare(password,user.password)
        if(!matchPass){
            return res.status(401).json({message:"Invalid Password"})
        }
        const token = await jwt.sign({id:user._id,email:user.email,name:user.name,role:user.role},process.env.SECREATE_KEY)
        return res.status(200).json({token:token,user:user})
    }catch(e){
        return res.status(400).json({message:e.message})
    }

}

module.exports = {register,login}