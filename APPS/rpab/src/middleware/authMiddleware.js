import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const verifyToken =async (req,res,next)=>{
  let token;
  let authHeader = req.headers.Authorization ||req.headers.authorization
  if(authHeader && authHeader.startsWith('Bearer')){
    token = authHeader.split(' ')[1];
  }
  if(!token){
    return res.status(401).json({message:`No token,authorized denied`})
  }

  try{
    const decode = jwt.verify(token,process.env.JWT_SECRET)
    req.user =decode
    console.log(`the decode user is:`,req.user)
    next()

  }catch(error){
    res.status(400).json({message:`Token is not valid`})
  }

}

export default verifyToken