//Promises
function callback(){
  console.log("Hello World. 10 seconds have passed.");
}
function setTimeOutPromisified(duration){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,duration);
  })
}
setTimeOutPromisified(10000).then(callback);

//Callback Hell
function callback2(){
  setTimeout(()=>{
    console.log("Hii");
    setTimeout(()=>{
      console.log("Hello");
      setTimeout(()=>{
        console.log("Hello there");
      },5000)
    },3000)
  },1000)
}
callback2();

// A cleaner way to write Callback Hell
function step3done(){
    console.log("Hello there");
}
function step2done(){
    console.log("Hello");
    setTimeout(step3done,5000)
}
function step1done(){
    console.log("Hii");
    setTimeout(step2done,3000);
}
setTimeout(step1done,1000);

//Promisified approach
function setTimeoutPromisify(duration){
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}
setTimeoutPromisify(1000).then(() =>  {
  console.log('Hii');
  setTimeoutPromisify(3000).then(() =>{
    console.log('Hello');
    setTimeoutPromisify(5000).then(() =>{
      console.log('Hello there');
    });
  });
});

//Promise chaining
setTimeoutPromisify(1000).then(()=>{
  console.log('Hii');
  return setTimeoutPromisify(3000).then(()=>{
    console.log('Hello');
    return setTimeoutPromisify(5000).then(()=>{
      console.log('Hello there');
    });
  });
});
setTimeoutPromisify(1000).then(() => {
  console.log("Hii");
  return setTimeoutPromisify(3000);
}).then(()=>{
  console.log("Hello");
  return setTimeoutPromisify(5000);
}).then(()=>{
  console.log("Bye");
});

// Async Await - Synctactical Sugar
async function asyncawait(){
  await setTimeoutPromisify(1000);
  console.log("Hii");
  await setTimeoutPromisify(3000);
  console.log("Hello");
  await setTimeoutPromisify(5000);
  console.log("Hello there")
}
asyncawait();

//
const fs=require("fs");
function readFiles(){
    return new Promise((resolve,reject)=>{
        fs.readFile("a.txt","utf-8",(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}
readFiles().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err);
})