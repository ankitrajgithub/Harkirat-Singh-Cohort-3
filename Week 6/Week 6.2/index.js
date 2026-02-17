const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_SECRET="hcbwchwcblcwcjndwkjcwdhcbcj";

const app=express();

function auth(req,res,next){
    const token=req.headers.authentication;
    if(token){
        jwt.verify(token,JWT_SECRET,(error,decodedData)=>{
            if(error){
                res.status(401).json({
                    msg:"Unauthenticated!!",
                });
            }else{
                req.user=decodedData;
                next();
            }
        });
    }else{
        res.status(401).json({
            msg:"Unauthenticated!!"
        });
    }
}

function logger(req,res,next){
    console.log(`${req.method} + request came...`);
    next();
}

app.use(express.json());

const users=[];

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
});

app.post("/signup",logger,(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let userNotFound=true;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username){
            userNotFound=false;
        }
    }
    if(userNotFound){
        users.push({username:username,password:password});
        res.json({
            msg:"User Signed Up Successfully!!",
            users:users
        });
    }else{
        res.json({
            msg:"This account is already registered!!"
        })
    }
});

app.post("/signin",logger,(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let validUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===username&&users[i].password===password){
            validUser=users[i];
        }
    }
    if(validUser){
        const token=jwt.sign({
            username:username,
            password:password
        },JWT_SECRET);
        validUser.token=token;
        res.header("jwt",token);
        res.json({
            msg:"You are signed in",
            token:token,
            users:users
        });
    }else{
        res.json({
            msg:"Wrong username or password. Please tru again later!!"
        });
    }
});

app.get("/me",logger,auth,(req,res)=>{
    let foundUser=null;
    for (let i=0;i<users.length;i++){
        if(users[i].username===req.user.username){
            foundUser=users[i];
        }
    }
    res.json({
        username:foundUser.username,
        password:foundUser.password,
        msg:"Hello "+foundUser.username+"! Your password is "+foundUser.password
    });   
});

app.listen(3000);