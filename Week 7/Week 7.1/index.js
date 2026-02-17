const express=require("express");
const jwt=require("jsonwebtoken");
const {JWT_SECRET,authentication}=require("./auth");
const mongoose=require("mongoose");
const {UserModel,TodoModel}=require("./db");

const app=express();

app.use(express.json());

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://ankit188raj_db_user:utedprCir2yDknLN@cluster0.b92npbv.mongodb.net/todo-app-database');
}

app.post("/signup",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;
    await UserModel.create({
        email:email,
        password:password,
        name:name
    });
    res.json({
        msg:"You are signed in"
    });
});

app.post("/signin",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await UserModel.findOne({
        email:email,
        password:password
    });
    if(user){
        const token=jwt.sign({
            userId:user._id.toString()
        },JWT_SECRET);
        res.json({
            msg:"You are signed in!!!",
            token:token
        });
    }else{
        res.status(403).json({
            msg:"User doesn't exist!!"
        });
    }
});

app.get("/todos",authentication,async (req,res)=>{
    const userId=req.userId;
    const todo=await TodoModel.find({
        userID:userId
    });
    if(todo){
        res.json({
            todo
        })
    }else{
        res.json({
            msg:"No data found!!"
        })
    }
});

app.post("/todo",authentication,async (req,res)=>{
    const description=req.body.description;
    const userID=req.userId;
    const done=req.body.done;
    await TodoModel.create({
        description:description,
        userID:userID,
        done:done
    });
    res.json({
        msg:"Data entered!!"
    })
})

app.listen(3000);