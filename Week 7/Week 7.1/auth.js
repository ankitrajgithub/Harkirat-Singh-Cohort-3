const jwt=require("jsonwebtoken");
const JWT_SECRET="ILikeCoding";

function authentication(req,res,next){
    const token=req.headers.token;
    const response=jwt.verify(token,JWT_SECRET);
    if(response){
        req.userId=response.userId;

        next();
    }else{
        res.status(403).json({
            msg:"You need to login first!!"
        });
    }
}

module.exports={
    JWT_SECRET:JWT_SECRET,
    authentication:authentication
};