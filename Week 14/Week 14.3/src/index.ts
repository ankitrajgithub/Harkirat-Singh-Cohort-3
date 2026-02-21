interface User{
    name:string,
    age:number
}

const user1:User={
    name:"Ankit",
    age:21
}

const user2:User={
    name:"Kashish",
    age:19
}

function sumAge(user1:User,user2:User):void{
    console.log("Age sum: "+(user1.age+user2.age))
}

sumAge(user1,user2);

//Pick
interface Users{
    id:string,
    name:string,
    email:string,
    age:number,
    password:string,
    createdAt:Date
}

type UpdateProps=Pick<Users, "name"|"email"|"age">

function updateUser(updateProp:UpdateProps){
    //Hit the database to update the user
}

//Partial
type UpdateProp=Partial<UpdateProps>;

function updateUsers(updateProp:UpdateProp){
    //Hit the database to update the user
}

//Readonly
interface user{
    readonly name:string,
    readonly age:number
}

const users:user={
    name:"Ankit",
    age:21
}

const userss:Readonly<user>={
    name:"Ankit",
    age:21
}

// userss.age=22;

interface Usser{
    id:string,
    name:string
}

interface Ussers{
    [key:string]:Usser
}

//Record
type Userss=Record<string,Usser>

const ussers:Userss={
    "1":{
        id:"1",
        name:"Ankit Raj"
    },
    "2":{
        id:"2",
        name:"Anuj Raj"
    }
}

//Map
const userMap=new Map<string,Usser>();

userMap.set('1', { id: '1', name: 'Ankit Raj' });
userMap.set('2', { id: '2', name: 'Anuj Raj' });

console.log(userMap.get("1"));

//Exclude
type Event = "click"|"scroll"|"mousemove";
type ExcludeEvent=Exclude<Event,"click">;

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

// handleEvent('click'); 

