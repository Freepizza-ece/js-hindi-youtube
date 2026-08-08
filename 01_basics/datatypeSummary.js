// # primitive

// 7 category (call by value happens in then not call by value) : strings ,Number,Boolean ,Null,Undefined,Symbol,BIgint


const score=false;//(dynamically typed)
const scoreValue=100.3

const isLoggedIn=false;
const outsideTemp =null;
let userEmail;///(udnefined)


const id=Symbol('123');
const anotherId=Symbol('123')

console.log(id==anotherId);

// const bigNumber=2685246294740n
//(datatype::Bigint)

//Refernce type (Non-primitive) (directly call by reference)

//Array,Objects,funtions


const heroes=['Yash',"iron man","superman"]//(array)
let myObj={
    name:"shikha",
    age:22,
}
const myfunction=function()
{
    console.log("hello world");
}

console.log(typeof bigNumber);
