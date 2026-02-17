const jwt=require("jsonwebtoken");
const jwt_secret="rbi";


const value={
    name:"Ankit Raj",
    accountnumber:123123123
}

//Sign

const token=jwt.sign(value,jwt_secret);
console.log(token);

//Decode

const decodedData1=jwt.decode(token);
console.log(decodedData1.name);
console.log(decodedData1.accountnumber);

//Verify

const decodedData2=jwt.verify(token,jwt_secret);
console.log(decodedData2.name);
console.log(decodedData2.accountnumber);

//Try Catch block
function getLength(name){
    return name.length;
}

try{
    const ans=getLength();
    console.log(ans);
}catch(err){
    console.log("Error Caught");
    console.log(err);
}finally{
    console.log("Error Handled")
}

function signJWT(username,password){
    const signature=jwt.sign({
        username:username,
        password:password
    },jwt_secret);
    return signature;
}

function verifyJWT(token){
    const decodedData=jwt.verify(token,jwt_secret);
    return decodedData;
}

const tokens=signJWT("ankit@gmail.com","ankit");
console.log(tokens);

const data=verifyJWT(tokens);
console.log(data.username+'  '+data.password);

