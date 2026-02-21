let x:number | string=1;  //type inferencing
console.log(x);

function greet(firstName:any){
    console.log("Hello "+firstName);
}

greet("Ankit Raj");

function sum(a:number,b:string){
    return a+b;
}

let summ=sum(10,"20");
summ="a";
console.log(summ);

function ageCheck(age:number){
    if(age>18){
        console.log("You are eligible to vote!!");
    }else{
        console.log("You are not eligible to vote!!");
    }
}

ageCheck(19);
ageCheck(18);

function delayed(fn:()=>void){
    setTimeout(fn,5000)
}

delayed(()=>{
    console.log("Runned after 5 Seconds");
});

const user:{
    name:string,
    age:number
}={
    name:"Ankit Raj",
    age:21
}

function greetings(user:{
    name:string,
    age:number
}){
    console.log("Hii "+user.name+'. Your age is '+user.age);
}

greetings(user);

interface User{
    firstName:string,
    lastName:string,
    email:string,
    age:number
}

let user1:User={
    firstName:"Ankit Raj",
    lastName:"Raj",
    email:"ankit188raj@gmail.com",
    age:21
}

function greeting(user:User){
    console.log(user.firstName);
}

greeting(user1);

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); 
printId("202"); 


function printSum(a: StringOrNumber, b: StringOrNumber) :void {
  if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else if(typeof a === "string" && typeof b === "string") {
    console.log(a+b);
  }else{
    console.log("Both values must be numbers");
  }
}

printSum("ankit",188); 
printSum("ankit ","raj"); 
printSum(1,2);

