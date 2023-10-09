//javascript is dynamically typed language ("When you declare a variable, you do not need to specify what type this variable is")

// # Primitive (allocate copy of reference)
// 7 types : String, Number, Boolean, null, undefined, Symbol(value becomes unique using this datatype), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outsideTemp = null
let userEmail;  // also defined as (let userEmail = undefined)

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 3878675867385673867538n


//# Reference (NonPrimitive) "allocate reference directly"

// Array, Object, Functions

const heros = ["abc" , "xyz" , "lmn"]  // Array

let myObj = {
    name: "sanika",
    age: "21",
}  //object

const myFunction = function () {
    console.log("hello sanika");
}

console.log(typeof myFunction);

/* 
Return type of variables in JavaScript
1) primitive Datatypes
    Number = number
    String = object
    Boolean = boolean
    null = object
    undefined = undefined
    Symbol = symbol
    bigint = bigint

2) Non-primitive Datatypes
    Array = object
    Function = function
    Object = object
*/
