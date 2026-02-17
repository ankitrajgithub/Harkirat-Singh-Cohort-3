// Classes
class Rectangle{
    constructor(height,width,color){
    this.width = width;
    this.height = height;
    this.color=color;
  }
  getArea(){
    return this.width * this.height;
  }
  getPerimeter(){
    return 2 * (this.width + this.height);
  }
  color(){
    return this.color;
  }
}
let r=new Rectangle(10,20,"Green"); // Object/Instance of Rectangle class
console.log(`Area of Rectangle is ${r.getArea()}`);
console.log(`Perimeter of Rectangle is ${r.getPerimeter()}`);
console.log(`Color of Rectangle is ${r.color}`);
console.log(Math.PI);

// Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name); 
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} barks.`);
  }
}
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); 
myDog.bark(); 

//Some more Classes
const now=new Date();
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getMonth());

const map=new Map();
map.set("name","Ankit");
map.set("age",21);
console.log(map.get("name"));

//Callbacks - A callback is a function passed as an argument to another function.
function after3Sec(resolve){
  setTimeout(resolve,3000);
}
function main(){
  console.log("3 sec has passed");
}
after3Sec(main);      // Callback based approach


//Promise Class - Promise class gives you a promise, that you will get the result in future.A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
function setTimeoutPromisified(duration) {
  return new Promise((resolve,reject) => {    //Returns an object of Promise class
    setTimeout(resolve, duration);
  });
}
function callback(){
  console.log("10 sec has passed");
}
setTimeoutPromisified(10000).then(callback);    // Promisified based approach


function callback(){
  console.log("Promise resolved");
}
function random(resolve){
  resolve();
}
let p=new Promise(random);
p.then(callback);


//Pomisified Version of fs.readFile, fs.writeFile, cleanFile
const fs = require("fs");
function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(data);
        resolve();
      }
    });
  });
}
function writeFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
function cleanFile(fileName) {
  return new Promise((resolve, reject) => {
    const data = fs.readFile(fileName, "utf-8", (err, data) =>{
      if(err){
        reject(err);
      }else{
        fs.writeFile(fileName,"",(err)=>{
          if(err){
            reject(err);
          }else{
            resolve();
          }
        })
      }
    });
  })
}
cleanFile("data.txt")
.then(() => writeFile("data.txt", "Hello World"))
.then(() => readFile("data.txt"))
.then(() => console.log("File read successfully"))
.catch(err => console.error(err));


function readTheFile(resolve){
  fs.readFile("data.txt", "utf-8", (err, data) =>{
    resolve(data);
  })
}
function readFile(){
  return new Promise(readTheFile);
}
function onDone(data){
  console.log(data);
}
const q=readFile();
q.then(onDone);


// Callback Hell
setTimeout(function(){
  console.log("Hii");
  setTimeout(function(){
    console.log("Working")
    setTimeout(function(){
      console.log("Bye")
    },5000);
  },3000);
},1000);

// Solution
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
setTimeoutPromisified(1000)
.then(function () {
  console.log("hi");
  return setTimeoutPromisified(3000);
})
.then(function () {
  console.log("hello");
  return setTimeoutPromisified(5000);
})
.then(function () {
  console.log("hello there");
});


const fs = require("fs");
function trimFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        data = data.trim();
        fs.writeFile(filePath, data, (error) => {
          if (error) {
            reject(error);
          } else {
            console.log("File trimmed successfully");
            resolve();
          }
        });
      }
    });
  });
}
trimFile("data.txt");


//Promise Class
class Promise2{
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolve();
    })
  } 
  then(callback){
    this.resolve=callback;
  }
}
function setTimeOut2(resolve){
  console.log("hello1");
  setTimeout(resolve,10000);
}
function setTimeoutPromisify(){
  return new Promise2(setTimeOut2);
}
let rs=setTimeoutPromisify();
function callback(){
  console.log("hello2");
}
rs.then(callback);


const air=new Promise((resolve)=>{
  let c=0;
  for(let i=0;i<1000;i++){
    c++;
  }
  console.log("promise resolved");
  resolve("you call now call your callback");
})
function callback(str){
  console.log(str);
}
function error1(error){
  console.log("promise rejected"+error);
}
air.then(callback).catch(error1);