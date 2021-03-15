const jwt = require('jsonwebtoken')
verifyToken  =(req,res,next) =>{
  if (req.path == '/posts/all') return next()

    const token =  req.headers.authorization.split(' ')[1]
    if(!token)   return res.status(403).send("Token not found")
     const verifyToken = jwt.verify(token,process.env.TOKEN)
     if(!verifyToken)
      return res.status(403).send("Invalid Token")
    next()
  }

module.exports = verifyToken