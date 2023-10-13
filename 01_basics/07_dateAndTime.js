//Date
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());  //Fri Oct 13 2023 o/p
console.log(myDate.toISOString()); //2023-10-13T06:20:47.640Z 
console.log(myDate.toJSON()); //2023-10-13T06:21:38.532Z
console.log(myDate.toLocaleDateString()); //10/13/2023
console.log(myDate.toLocaleString());//10/13/2023, 6:22:27 AM
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) // month in js starts from 0
//let myCreatedDate = new Date(2023, 0, 23, 25 ,3) // date and time
//let myCreatedDate = new Date("2023-01-14") 
let myCreatedDate = new Date("01-14-2023") 
console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14") 
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // get time we can get time in milisec

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})