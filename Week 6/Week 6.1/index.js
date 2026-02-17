const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const JWT_SECRET="hellotheremynameisankitraj";

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        msg:"Home Page!!!"
    })
});

const users=[];

// function generateToken(){
//     let options=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     let token="";
//     for(let i=0;i<32;i++){
//         token=token+options[Math.floor(Math.random()*options.length)];
//     }
//     return token;
// }

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let userFoundOrNot=true;
    if(users.find((user)=>{
        if(user.username==username){
            userFoundOrNot=false;
            res.json({
                msg:"You are already registered"
            });
            return;
        }
    }));
    if(userFoundOrNot){
        users.push({
            username:username,
            password:password
        });
        res.json({
            msg:"You are signed up"
        });
    }
    console.log(users);
});

app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            foundUser=users[i];
        }
    }
    if(foundUser){
        let token=jwt.sign({
            username:username
        },JWT_SECRET);
        // foundUser.token=token;
        res.json({
            user:username,
            token:token
        });
    }else{
        res.status(403).json({
            msg:"Invalid username or password"
        });
    }
    console.log(users);
});

app.get("/me",(req,res)=>{
    const token=req.headers.token;   //jwt web token
    const decodedInformation=jwt.verify(token,JWT_SECRET);
    const username=decodedInformation.username;
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username){
            foundUser=users[i];
        }
    }
    if(foundUser){
        res.json({
            msg:"Hello "+foundUser.username+" Your password is "+foundUser.password
        });
    }else{
        res.status(403).json({
            msg:"Unauthorized"
        });
    }
});



app.listen(3000);