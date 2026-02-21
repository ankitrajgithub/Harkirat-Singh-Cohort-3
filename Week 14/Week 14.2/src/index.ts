const usera:string="Ankit Raj";

function add(a:number,b:number):number{
    return a+b;
}

const sum:number=add(10,20);

function greet(name: string): void{
    console.log("Hello "+name);
}

function isEven(num:number):boolean{
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

//Interface
interface Address{
    city:string,
    country:string,
    pincode:number,
    houseNumber:number
}

interface User{
    name:string,
    age:number,
    address?:Address
}

interface Office{
    address:Address
}

let user:User={
    name:"Ankit Raj",
    age:21,
    address:{
        city:"Delhi",
        country:"India",
        pincode:110096,
        houseNumber:188
    }
}

function isLegal(user:User):void{
    if(user.age>18){
        console.log("You are eligible to vote");
    }else{
        console.log("You are uneligible to vote")
    }
}

isLegal(user);

interface Person{
    name:string,
    age:number,
    greet1():void,
    greet2?:()=>string
}

const person:Person={
    name:"Ankit Raj",
    age:21,
    greet1:()=>{
        console.log("Hii");
    }
}

person.greet1();

class People implements Person{
    // greet1:()=>void;
    constructor(public name:string,public age:number){
        this.name=name;
        this.age=age;
        // this.greet1=()=>{
        //     console.log("Hii, "+this.name);
        // }
    }
    greet1=()=>{
        console.log("Hii, "+this.name);
    }
}

let user1=new People("Ankit Raj",21);

user1.greet1();

//Abstract
abstract class Usera{
    name:string
    constructor(name:string){
        this.name=name;
    }
    abstract greet():void;
    hello():void{
        console.log("Hello, "+this.name);
    }
}

class Employee extends Usera{
    constructor(public name:string){
        super(name)
    }
    greet():void{
        console.log("Hii, "+this.name);
    }
}

const employees=new Employee("Ankit Raj");
employees.greet();
employees.hello();

//Types
type User1={
    name:string,
    age:number,
    dob:Date;
}

type User2={
    name:string,
    age:number,
    grade:string
}

type Student= User1 & User2;

const student1:Student={
    name:"Ankit Raj",
    age:21,
    dob:new Date(),
    grade:"5th Class"
}

console.log(student1);

type GoodUser={
    name:string,
    gift:string
}

type BadUser={
    name:string,
    ip:string
}

type GoodOrBadUser= GoodUser | BadUser;

const goodorbaduser:GoodOrBadUser={
    name:"Ankit Raj",
    ip:"123",
    gift:"Iphone"
}

console.log(goodorbaduser);

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); 
printId("202"); 

interface Useres{
    name:string,
    permissions:string
}

interface Admines{
    name:string,
    age:number
}

type UserOrAdmin = Useres | Admines;

function greeting(user:UserOrAdmin){
    console.log(user.name);
}

interface Users{
    age:number | string;
}

//Arrays
let nums=[1,2,3,4,5,6,7,8,9]

function getMax(nums:number[]):number{
    let max=-100000000000;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!>max){
            max=nums[i]!;
        }
    }
    return max;
}

const a=getMax(nums);
console.log(a);

interface Addresses{
    city:string,
    country:string,
    pincode:number
}

interface Userer{
    name:string,
    age:number,
    address:Addresses[];
}

const address:Addresses[]=[{city:"Delhi",country:"India",pincode:110096},{city:"Delhi",country:"India",pincode:110096}]

const userss:Userer={
    name:'Ankit Raj',
    age:32,
    address:address
}

console.log(userss);

interface Usersss{
    firstName:string,
    lastName:string,
    age:number
}

function checkAge(user:Usersss[]):Usersss[]{
    return user.filter((x)=>x.age>18);
}

const usersss:Usersss[]=[{firstName:"Ankit",lastName:"Raj",age:19},{firstName:"Anuj",lastName:"Raj",age:21},{firstName:"Mehul",lastName:"Raj",age:17},{firstName:"Kashish",lastName:"Raj",age:23}];

const check=checkAge(usersss);
console.log(check);
