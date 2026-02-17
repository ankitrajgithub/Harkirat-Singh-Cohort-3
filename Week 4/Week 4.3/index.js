const express= require("express");
const app=express();

const users=[{
    name:"John",
    kidney:[{
        healthy:false
    },{
        healthy:true
    },{
        healthy:true
    },{
        healthy:true
    }]
}]

function calculateSum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}

function sum(a,b){
    return parseInt(a)+parseInt(b);
}

app.use(express.json());

app.get("/",(req,res)=>{
    const n=req.query.n;
    const ans=calculateSum(n);
    res.send(`<h1>${ans.toString()}</h1>`)
});

app.get("/sum",(req,res)=>{
    const a=req.query.a;
    const b=req.query.b;
    const answer=sum(a,b);
    res.send(`<h1>${answer.toString()}</h1>`);
});

app.get("/kidney",(req,res)=>{
    const JohnKidneys=users[0].kidney;
    const numberOfKidneys=JohnKidneys.length;
    let numberofHealthyKidneys=0;
    for(let i=0;i<numberOfKidneys;i++){
        if(JohnKidneys[i].healthy){
            numberofHealthyKidneys=numberofHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberofHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfUnhealthyKidneys,
        numberofHealthyKidneys
    })
});

app.post("/kidney",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidney.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done"
    })
});

function atleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0;i<users[0].kidney.length;i++){
        if(!users[0].kidney[i].healthy){
            atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.put("/kidney",(req,res)=>{
    if(atleastOneUnhealthyKidney()){
        for(let i=0;i<users[0].kidney.length;i++){
            users[0].kidney[i].healthy=true;
        }
        res.send({});
    }else{
        res.sendStatus(411).json({
            "msg":"You have no bad kidney"
        });
    }
});

app.delete("/kidney",(req,res)=>{
    if(atleastOneUnhealthyKidney()){
        const newKidneys=[];
        for(let i=0;i<users[0].kidney.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidney=newKidneys;
        res.send({});
    }else{
        res.sendStatus(411).json({
            "msg":"You have no bad kidney"
        });
    }
});

app.listen(3000);