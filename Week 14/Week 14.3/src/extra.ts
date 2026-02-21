enum CupSize {
    SMALL,
    MEDIUM, 
    LARGE
}

const size= CupSize.LARGE;

enum STATUS{
    PENDING=100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType {
    MASALA="masala",
    GINGER="ginger"
}

function makeChai(type:ChaiType):void{
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER);

enum RandomEnum {
    ID=1,
    NAME="Ankit"
}

const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

let t:[string,number]=["Ankit Raj",21];
console.log(t);
t.push("extra");

function wrapInArray<T>(item:T):T[]{
    return [item]
}
wrapInArray("masala");
wrapInArray(401);

function pair<A,B>(a:A,b:B):[A,B]{
    return [a,b]
}

const a=pair("masala",20);
console.log(a);

interface Box<T>{
    content:T
}

const numberBox:Box<number>={content:10}
const numberBoxString:Box<string>={content:"Ankit Raj"}

interface ApiPromise<T>{
    status:number,
    data:T
}

const res:ApiPromise<{flavour:string}>={
    status:2000,
    data:{
        flavour:"Ginger"
    }
}