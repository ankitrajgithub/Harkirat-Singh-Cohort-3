const express=require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>Ankit Raj</h1>");
});

app.get('/say',(req,res)=>{
    res.send("Hello World");
});

app.listen(443,()=>{
    console.log("App running on Port 443");
});

