const jwt = require('jsonwebtoken')

const authenticateToken =(req,res,next) =>{
    try{
        const authHeader = req.header("Authorization")
        if(!authHeader){
            return res.status(401).json({message:"Access Denied"})
        }
        const token = authHeader.split(' ')[1]
        if(!token){
            return res.status(401).json({message:"Access Denied Token Missig"})
        }
        jwt.verify(token,process.env.SECREATE_KEY,(err,payload) =>{
            if(err){
                return res.status(401).json({message:"Invalid JWT Token"})
            }
            req.user = payload
            res.status(200).json({message:"Authenticate Correctly"})
            next()
        })

    }catch(e){
        res.status(400).json({message:e.message})
    }
}
module.exports = authenticateToken