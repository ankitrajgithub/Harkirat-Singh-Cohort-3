const express=require("express");
const jwt=require("jsonwebtoken");
const {JWT_SECRET,authentication}=require("./auth");
const mongoose=require("mongoose");
const {UserModel,TodoModel}=require("./db");
const bcrypt=require("bcrypt");
const {z}=require("zod");

const app=express();

app.use(express.json());

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://ankit188raj_db_user:utedprCir2yDknLN@cluster0.b92npbv.mongodb.net/todo');
}

app.post("/signup",async (req,res)=>{
    const requiredBody=z.object({
        email:z.string().min(11).max(100).email(),
        password:z.string().min(8).max(100).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/).regex(/[^a-zA-Z0-9]/),
        name:z.string().min(5).max(20)
    });
    // const parsedData=requiredBody.parse(req.body);
    const parsedDataWithSuccess=requiredBody.safeParse(req.body);
    if(!parsedDataWithSuccess.success){
        res.json({
            msg:"Email or Password is not in correct format!!",
            error:parsedDataWithSuccess.error
        });
        return;
    }
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;
    let errorThrown=false;
    try{
        const hashedPassword=await bcrypt.hash(password,5);
        await UserModel.create({
            email:email,
            password:hashedPassword,
            name:name
        });
    }catch(e){
        errorThrown=true;
        res.json({
            msg:"User already exists!!"
        })
    }
    if(!errorThrown){
        res.json({
            msg:"You are signed in!!"
        });
    }
});

app.post("/signin",async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await UserModel.findOne({
        email:email
    });
    if(!user){
        res.status(403).json({
            msg:"User doesn't exist"
        })
        return;
    }
    const passwordMatch=await bcrypt.compare(password,user.password);
    if(passwordMatch){
        const token=jwt.sign({
            userId:user._id.toString()
        },JWT_SECRET);
        res.json({
            msg:"You are signed in!!!",
            token:token
        });
    }else{
        res.status(403).json({
            msg:"Incorrect Credentials!!"
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
});

app.listen(3000);