// Normal functions in JS
function add(a,b){
  return parseInt(a)+parseInt(b);
}
let ans=add("2",3);
console.log(ans);

function add(n){
  let ans=0;
  for(let i=0;i<=n;i++){
    ans=ans+i;
  }
  return ans;
}
let ans1=add(100);
console.log(ans1);

// Functional arguments -> Functions passed as arguments to other functions
function sum(a,b){
  let ans=a+b;
  return ans;
}
function subtract(a,b){
  let ans=a-b;
  return ans;
}
function multiply(a,b){
  let ans=a*b;
  return ans;
}
function divide(a,b){
  let ans=a/b;
  return ans;
}
function calculator(a,b,fn){
  let ans=fn(a,b);
  return ans;
}
console.log(calculator(5,6,subtract));

// I/O heavy operations
const fs=require("fs");
const contents=fs.readFileSync("a1.txt","utf-8");  //  Synchronous -> Blocking
console.log(contents);
fs.readFile("b1.txt","utf-8", function(err,content){ // Asynchronous -> Non-blocking
  console.log(content);
});  
fs.readFile("c1.txt","utf-8", function(err,content){ // Asynchronous -> Non-blocking
  if(err){
    console.log("Error found -> "+err);
  }else{
    console.log(content);
  }
});  
console.log("Done");

//Set-time out
console.log("Hiii");
function timeout(){
  console.log("Timeout");
}
setTimeout(timeout,1000);
console.log("bye");
let c=0;
for(let i=0;i<10000000000;i++){
  c=c+1;
}
console.log("Expensive operation");

/*
Option 1 - correct
Hiii
bye
Expensive operation
Timeout

option 2
Hiii
bye
Timeout
Expensive operation
*/ 

//Synchronous Settimeout
function setTimeoutSync(timeout){
  let newTime=new Date();
  while(1){
    let currTime=new Date();
    if(currTime.getTime()-newTime.getTime()>=timeout){
      break;
    }
  }
}
setTimeoutSync(10000);
console.log("Hiii");